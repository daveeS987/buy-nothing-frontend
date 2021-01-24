import React, {  useState } from "react";
import { Modal, Button } from 'semantic-ui-react';
import axios from "axios";


const Upload = () => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("picture", image, image.name);
      formData.append("desc", description);

      let res = await axios.post('https://buynothingbackend.herokuapp.com/api/v2/imghandler/upload', formData);
      setError(false);
      handleClose();
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

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
          <form onSubmit={onSubmit}>
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
              Submit
            </button>

            {error ? (
              <div >
                {" "}
                Some error occured uploading the file{" "}
              </div>
            ) : null}
          </form>
        </Modal.Content>

        <Modal.Actions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Upload;