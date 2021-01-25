import React from 'react'
import { Button, Icon, Image, Modal, Grid, Row, Column } from 'semantic-ui-react'

const UploadModal = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
 
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Create New Post</Button>}
      >

    
      <Modal.Content image scrolling>
        <Modal.Description >
          <h1> Upload here </h1> 
          <p>upload your images</p>

        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          UPLOAD <Icon name='chevron right' />
        </Button>
      </Modal.Actions>

    </Modal>
   
  )
}

export default UploadModal;