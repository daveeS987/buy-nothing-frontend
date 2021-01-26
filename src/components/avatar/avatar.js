import React from 'react'
import {Icon, Message, Button } from 'semantic-ui-react'

import LogoutButton from '../../context/authO/authOlogout';


const Avatar = () => (
  <>
    <Message
      icon='user circle outline'
      header='Welcome back, Brook Riggio!'
      content='Current Location: Seattle'
    />
    <LogoutButton />
    <Button>GUEST</Button>
    <Button>SIGN UP</Button>
  </>
)

export default Avatar;
