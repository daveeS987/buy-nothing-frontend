import React from 'react'
import { Button, Icon, Image, Modal, Container, Header, Message } from 'semantic-ui-react'
import ListingCommentGroup from './semanticComponents/CommentGroup.js';

const ListModal = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
 
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}

  
      trigger={<Button>See Details</Button>}

      >

      <Modal.Content image>
        <Image size='large' src={props.object.imageUrl} wrapped  
        style={{
          margin : "auto"
          }}
        />
      </Modal.Content>
       

      <Modal.Content image scrolling>
        <Modal.Description >
          <Container text>
            <Header as='h1'>{props.object.title}</Header>
            <Header as='h3'>Location: {props.object.location}</Header>
            <Header as='h5'>Posted By: {props.object.creatorUserName}</Header>
            <Message>
            <Header as='h5'>Details:</Header>
              <p>{props.object.description}</p>
            </Message>
          </Container>

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