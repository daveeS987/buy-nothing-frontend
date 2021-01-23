// import React from 'react'
// import {Image, Modal, Button, Segment } from 'semantic-ui-react'
// import CommentExampleComment from './semanticComponents/reply.js';

// function ListModal (){

//   const [open, setOpen] = React.useState(false)

//   return(
//   <Modal
//   onClose={() => setOpen(false)}
//   onOpen={() => setOpen(true)}
//   open={open}
//   trigger={<Button>SEE COMMENTS</Button>}
//   >

//   <Modal.Header>Item Title</Modal.Header>

//   <Modal.Content image>
//     <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
//     <Modal.Description>
      
//     </Modal.Description>
   
//     <CommentExampleComment/>
//   </Modal.Content>


    
//   <Modal.Actions>
//     {/* <Button color='black' onClick={() => setOpen(false)}>
//       Item is Available
//     </Button> */}
//     <Button
//       content="Give item to..."
//       labelPosition='right'
//       icon='checkmark'
//       onClick={() => setOpen(false)}
//       positive
//     />
//   </Modal.Actions>
//   </Modal>


//   );
// }

// export default ListModal;

// Add a forth colum to the grid 
// Change main card title, set time stamp , read more button that populates modal
// 

import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

const ModalExampleScrollingContent = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Scrolling Content Modal</Button>}
    >
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

        <Modal.Description>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.
          </p>

          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleScrollingContent