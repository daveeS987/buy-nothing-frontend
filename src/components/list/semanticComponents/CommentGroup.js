import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ListingComment from './Comment.js';
import {If, Then, Else} from 'react-if';
import { useAuth0 } from "@auth0/auth0-react";


import {addComment} from '../../../store/listings.js';
import {LoginContext} from '../../../context/auth/context.js';

function CommentGroup (props){
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const userContext = useContext(LoginContext);
  const [commentText, setNewComment ] = useState({});

  const handleChange = (e) => {    
    setNewComment(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

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

    <Form.Group size ='mini'>
      <If condition={LoginContext.userName !==''} >
        <Then>
          <Form reply>
            <Form.Input placeholder='Add a reply...' onChange={handleChange} />
            <Button onClick={handleSubmit} content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Then>
        <Else>
          <Form reply>
            <Form.Input placeholder='Please Login...' />
            <Button content='Please Login to Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Else>
      </If>
    </Form.Group>
  
  </Comment.Group>
  )
}

export default CommentGroup;              


