import React from 'react'
import { Button, Icon, Image, Modal, Grid, Row, Column } from 'semantic-ui-react'
import ListingCommentGroup from './semanticComponents/CommentGroup.js';

const ListModal = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
 
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}

  
      trigger={<Button>More Details</Button>}

      >

      <Modal.Content image>
        <Image size='medium' src={props.object.imageUrl} wrapped  
        style={{
          margin : "auto"
          }}
        />
      </Modal.Content>
       

      <Modal.Content image scrolling>
        <Modal.Description >
          <h1> {props.object.title} </h1> 
          <p>{props.object.description}</p>

          <ListingCommentGroup listing={props.object}/>


        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Close <Icon name='chevron right' />
        </Button>
      </Modal.Actions>

    </Modal>
   
  )
}

export default ListModal