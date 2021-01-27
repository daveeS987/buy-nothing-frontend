import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ListingComment from './Comment.js'

function CommentGroup (props){

  let comments = props.listing.comments;
  
  return (
  <Comment.Group size='mini'>
    <Header as='h3' dividing>
      Comments
    </Header>
    {
      comments.map(comment => {
        return (
        <ListingComment comment={comment} />
        )
      })
    }

  <br></br>
    <Form.Group size ='mini'>
    <Form reply>
    <Form.Input placeholder='Add a reply...' />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
    </Form.Group>
  
  </Comment.Group>
  )
}

export default CommentGroup;              