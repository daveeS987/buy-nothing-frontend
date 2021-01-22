import React from 'react'
import {Image, Modal, Button} from 'semantic-ui-react'


function ListModal (){

  const [open, setOpen] = React.useState(false)

  return(
  <Modal
  onClose={() => setOpen(false)}
  onOpen={() => setOpen(true)}
  open={open}
  trigger={<Button>SHOW MORE</Button>}
  >
  <Modal.Header>Item Title</Modal.Header>
  <Modal.Content image>
    <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
    <Modal.Description>
      {/* <Header>Default Profile Image</Header> */}
      <p>
      Item Description. Item Description. Item Description. Item Description. Item Description. Item Description. Item Description.
      </p>
      <p>Item Description</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions>
    <Button color='black' onClick={() => setOpen(false)}>
      Nope
    </Button>
    <Button
      content="Yep, that's me"
      labelPosition='right'
      icon='checkmark'
      onClick={() => setOpen(false)}
      positive
    />
  </Modal.Actions>
  </Modal>


  );
}

export default ListModal;