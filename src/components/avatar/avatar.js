import React from 'react'
import {Icon, Message, Button } from 'semantic-ui-react'

const Avatar = () => (
  <>
    <Message
      icon='user circle outline'
      header='Welcome back, Brook Riggio!'
      content='Current Location: Seattle'
    />
    <Button>LOG IN</Button>
    <Button>GUEST</Button>
    <Button>SIGN UP</Button>
  </>
)

export default Avatar;
