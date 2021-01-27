import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ListingComment from './Comment.js';

import {addComment} from '../../../store/listings.js';
import {LoginContext} from '../../../context/auth/context.js';

function CommentGroup (props){

  const dispatch = useDispatch();
  const userContext = useContext(LoginContext);
  const [commentText, setNewComment ] = useState({});

  // console.log('props.listing from line 16:', props.listing);

  const handleChange = (e) => {
    
    setNewComment(e.target.value);
  }

  async function handleSubmit(e) {

    e.preventDefault();

    console.log('userContext.user', userContext.user.username)
    
    let newCommentObj = {
      text: commentText, 
      username: userContext.user.username
    }


    let updatedListing = {
      ...props.listing,
      comments: [...props.listing.comments, newCommentObj]
    }

    let payload = {
      newListing: updatedListing,
      listingId: props.listing._id
    }

    dispatch(addComment(payload))
  }
  
  
  return (
    <Comment.Group size='mini'>
      <Header as='h3' dividing>
        Comments
    </Header>
      {
        props.listing.comments.map(comment => {
          return (
            <ListingComment comment={comment} />
          )
        })
      }

  <br></br>
      {//when we make our put request, we will put to LISTINGID, 
        //put needs ID and
        //let new listing = oldlisting ...[commentsarray, newcommentobject]
        //use newlisting on PUT request?
      }
    <Form.Group size ='mini'>
      <Form reply>
        <Form.Input placeholder='Add a reply...' onChange={handleChange} />
        <Button onClick={handleSubmit} content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Form.Group>
  
  </Comment.Group>
  )
}

export default CommentGroup;              


