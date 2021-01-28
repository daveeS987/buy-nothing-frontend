import React from 'react'
import {Comment } from 'semantic-ui-react'


const ListingComment = (props) => (


    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{props.comment.username}</Comment.Author>
        <Comment.Text>{props.comment.text}</Comment.Text>
      </Comment.Content>
    </Comment>



)

export default ListingComment;