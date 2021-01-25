import React, {  useState, useEffect } from "react";
import { Modal, Button, ModalContent, Form, Dropdown } from 'semantic-ui-react';
import axios from "axios";

import UploadForm from './uploadForm.js';
import Draft from './draft.js';


const Upload = () => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

  const [newImageUrl, setNewImageUrl] = useState('');

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

    try {
      const formData = new FormData();

      formData.append("picture", image, image.name);
      formData.append("desc", description);

      let res = await axios.post('https://buynothingbackend.herokuapp.com/api/v2/imghandler/upload', formData);

      console.log('res.data.createdImage.url:', res.data.createdImage.url)
      // setNewImageUrl(res.data.createdImage.url)
      // console.log('newImageUrl:', newImageUrl)
      setFormItems({...formItems, imageUrl: res.data.createdImage.url})

      setError(false);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  /*
   {
      "comments": [],
      "commentors": [],
      "_id": "600dc01b20cd1d0015adeb6a",
      "title": "testing123",
      "description": "testing123",
      "imageUrl": "https://via.placeholder.com/300x300?text=test+image+1",
      "creatorUserName": "testing123",
      "creatorUserId": "testing123",
      "categories": "testing123",
      "location": "testing123",
      "itemStatus": true,
      "__v": 0
    },

  */

  const submitHandler = async(e) => {
    e.preventDefault();

    let ouput = {
      ...formItems,
      comments: [],
      commentors: [],
      creatorUserName: 'hardCoded userName',
      creatorUserId: 'hardCoded creatorUserId',
      itemStatus: true,
    }

    console.log('formItems inside submitHandler:', JSON.stringify(ouput));

    
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
            <div>
              <label htmlFor="desc">description</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                value={description}
                className="form-control"
                required
                id="desc"
              />
            </div>

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
