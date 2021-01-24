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
import { Button, Icon, Image, Modal, Grid, Row, Column } from 'semantic-ui-react'
import CommentExampleComment from './semanticComponents/reply.js';

const ModalExampleScrollingContent = () => {
  const [open, setOpen] = React.useState(false)

  return (

       
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>See Comments...</Button>}
      >

      <Modal.Content image>
   <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped  
   style={{
     margin : "auto"
    }}
  />
    <Modal.Description>
      
    </Modal.Description> 
   
  </Modal.Content>
       

  
      <Modal.Content image scrolling>

        <Modal.Description >
          <h1> Title of Post </h1> 
          <p>
            This is the description of the item 
           
          </p>

          
          <CommentExampleComment/>
          
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