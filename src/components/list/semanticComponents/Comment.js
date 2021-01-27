import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


const ListingComment = (props) => (


    <Comment>
      {/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
      <Comment.Content>
        <Comment.Author as='a'>{props.comment.username}</Comment.Author>
        {/* <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata> */}
        <Comment.Text>{props.comment.text}</Comment.Text>
        {/* <Comment.Actions> */}
          {/* <Comment.Action>Reply</Comment.Action> */}
          {/* need to add reply functionality we should probably not worry about this */}
        {/* </Comment.Actions> */}
      </Comment.Content>
    </Comment>



)

export default ListingComment;