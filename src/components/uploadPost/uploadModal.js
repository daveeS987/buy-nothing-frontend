import React, {  useState, useContext } from "react";
import {useDispatch } from 'react-redux';
import { Modal, Button, Form, Message, Icon} from 'semantic-ui-react';
import axios from "axios";


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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formItems, setFormItems ] = useState({});


  console.log(formItems);
  
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
          <img id="target" src={image} style={{width:'300px', height:'300px'}} /> 
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
        <Modal.Content>
          <form onSubmit={uploadHandler}>

            <div >
              <div >
              <div>
                {image ? preUploadImg() : < img id="placeholderimg" src={'https://via.placeholder.com/300x300?text=Upload+Image'}/>}
              </div>
                <input
                  type="file"
                  onChange={(e) => preUploadImgHandler(e)}
                  id="image"
                  className="ui button customButton"
                />

                <label htmlFor="image">
                  {image ? fileData() : "Choose File"}
                </label>
              </div>
            </div>

            <button className="ui button customButton" type="submit">
              UPLOAD IMAGE
            </button>

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
            
            <Form.Input fluid name='title' label='Item Title' placeholder='Item Title' onChange={handleChange}/>

            <Form.Input fluid name='location' label='Location' placeholder='Location' onChange={handleChange}/>

            <Form.Input fluid name='categories' label='categories' placeholder='categories' onChange={handleChange}/>
            
            <Form.TextArea name='description' label='Description' placeholder='Item Description...' onChange={handleChange}/>

          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button onClick={submitHandler}>
            SUBMIT
          </Button>
          <Button onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Actions>

      </Modal>
    </>
  );
};

export default Upload;
