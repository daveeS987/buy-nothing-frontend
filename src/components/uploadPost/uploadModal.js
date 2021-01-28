import React, {  useState, useContext } from "react";
import {useDispatch } from 'react-redux';
import { Modal, Button, Form, Message, Icon} from 'semantic-ui-react';
import axios from "axios";
import {If, Then, Else} from 'react-if'


import {addListing} from '../../store/listings.js';
import {LoginContext} from '../../context/auth/context.js';

const Upload = () => {

  const userContext = useContext(LoginContext);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [imgData, setImgData] = useState(null);
  const [isUploaded, setisUploaded] = useState(false);
  const [formItems, setFormItems ] = useState({});

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // console.log(formItems);
  
  const handleChange = (e) => {
    let newItems = {
      ...formItems, 
      [e.target.name]: e.target.value,

    }
    setFormItems(newItems);
  }


  const uploadHandler = async (e) => {
    e.preventDefault();
    console.log('this got triggered!');

    try {
      const formData = new FormData();
      console.log('img line 41', imgData)
      formData.append("picture", imgData, imgData.name);
      // formData.append("desc", description);

      let res = await axios.post('https://buynothingbackend.herokuapp.com/api/v1/imghandler/upload', formData);

      console.log('res.data.createdImage.url:', res.data.createdImage.url)
      setFormItems({...formItems, imageUrl: res.data.createdImage.url})


      setError(false);
      setisUploaded(true);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const preUploadImgHandler = async(e) => {
    setImgData(e.target.files[0])
    console.log('img line 61', imgData)
    if(e.target.files && e.target.files[0]){
      let reader = new FileReader()
      reader.onload = (e) =>{
        console.log({image: e.target.result})
      setImage(e.target.result)
    }
      reader.readAsDataURL(e.target.files[0]);
    }
  }


  const submitHandler = async(e) => {
    e.preventDefault();
    
    let output = {
      ...formItems,
      comments: [],
      commentors: [],
      creatorUserName: userContext.user.username,
      creatorUserId: userContext.user.mongoId,
      itemStatus: true,
    }
    console.log('uercontext 84',userContext.user);
    console.log('output line 84', output);
    dispatch(addListing(output));
    handleClose();
    setisUploaded(false)
    setImgData(null);
    setImage(null);
  }

  const fileData = () => {
    if (image)
      return (
        <h5>
          {" "}
          <em> {image.name} </em>{" "}
        </h5>
      );

    return null;
  };

  const preUploadImg = () => {
    if (image)
      return (
          <img id="target" alt="uploadedimage" src={image} style={{width:'300px', height:'300px'} } /> 
      );

    return null;
  };

  const uploadComplete = () => {
    if (isUploaded)
      return (
        <Message>
        <p>
        <Icon name='check' />Upload Complete!
        </p>
      </Message>
      );

    return null;
  };


  return (
    <>

      <Modal 
        open={show}  
        onClose={handleClose}
        trigger={<Button basic color='teal' onClick={handleShow}>Create New Post</Button>}
        >
        <Modal.Content >
          <Modal.Description>Upload Image</Modal.Description>
        </Modal.Content>
        <Modal.Content style={{textAlign: "center"}}>
          <form onSubmit={uploadHandler}>

            <div >
              <div >
              <div>
                {image ? preUploadImg() : < img id="placeholderimg" alt="preuploadimage" src={'https://via.placeholder.com/300x300?text=Upload+Image'}/>}
              </div>
                <input
                  type="file"
                  onChange={(e) => preUploadImgHandler(e)}
                  id="image"
                  className="ui button customButton"
                />

                <label htmlFor="image">
                  {image ? fileData() : ""}
                </label>
              </div>
            </div>
            {!isUploaded ? 
                <button className="ui button customButton" type="submit" style={{backgroundColor:'#008080'}}>
                  UPLOAD IMAGE
                </button> 
                 : ""}
            <div>
              {image ? uploadComplete() : ""}
            </div>

            {error ? (
              <div >
                {" "}
                Some error occured uploading the file{`${error}`}
              </div>
            ) : null}
          </form>
        </Modal.Content>

        <Modal.Content>
          <Form>
            
            <Form.Input fluid name='title' label='Item Title' placeholder='Item Title' required='true' onChange={handleChange}/>

            <Form.Input fluid name='location' label='Location' placeholder='Location' required='true' onChange={handleChange}/>

            <Form.Field fluid name='categories' label='categories' control='select' required='true' onChange={handleChange}>
                <option value='Appliances'>Appliances</option>
                <option value='Books'>Books</option>
                <option value='Clothes'>Clothes</option>
                <option value='Electronics'>Electronics</option>
                <option value='Furniture'>Furniture</option>
                <option value='General'>General</option>
                <option value='Household'>Household</option>
                <option value='Music'>Music</option>
                <option value='Real Estate'>Real Estate</option>
                <option value='Sports'>Sports</option>
                <option value='Tools'>Tools</option>
                <option value='Vehicles'>Vehicles</option>

              </Form.Field>     
                     
            <Form.TextArea name='description' label='Description' placeholder='Item Description...' required='true' onChange={handleChange}/>

          </Form>
        </Modal.Content>

        <Modal.Actions>
          <If condition={!isUploaded}>
            <Then>
              <Button>
                Please Upload Image
              </Button>
            </Then>
          <Else>
            <Button onClick={submitHandler}>
              SUBMIT
            </Button>
          </Else>
          </If>
          <Button onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Actions>

      </Modal>
    </>
  );
};

export default Upload;
