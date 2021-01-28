import React, {  useState, useContext } from "react";
import {useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'semantic-ui-react';
import axios from "axios";


import {addListing} from '../../store/listings.js';
import {LoginContext} from '../../context/auth/context.js';

const Upload = () => {

  const userContext = useContext(LoginContext);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  // const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formItems, setFormItems ] = useState({});

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

      formData.append("picture", image, image.name);
      // formData.append("desc", description);

      let res = await axios.post('https://buynothingbackend.herokuapp.com/api/v1/imghandler/upload', formData);

      console.log('res.data.createdImage.url:', res.data.createdImage.url)
      setFormItems({...formItems, imageUrl: res.data.createdImage.url})

      setError(false);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };


  const submitHandler = async(e) => {
    e.preventDefault();

    let ouput = {
      ...formItems,
      comments: [],
      commentors: [],
      creatorUserName: userContext.user.username,
      creatorUserId: userContext.user._id,
      itemStatus: true,
    }

    dispatch(addListing(ouput));
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


  return (
    <>

      <Modal 
        open={show}  
        onClose={handleClose}
        trigger={<Button onClick={handleShow}>Create New Post</Button>}
        >
        <Modal.Content >
          <Modal.Description>Upload Image</Modal.Description>
        </Modal.Content>
        <Modal.Content>
          <form onSubmit={uploadHandler}>

            <div >
              <div >
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  id="image"
                />

                <label htmlFor="image">
                  {image ? fileData() : "Choose File"}
                </label>
              </div>
            </div>

            <button type="submit">
              UPLOAD IMAGE
            </button>

            {error ? (
              <div >
                {" "}
                Some error occured uploading the file{" "}
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
