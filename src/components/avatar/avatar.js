import React from 'react'
import {Icon, Message, Button } from 'semantic-ui-react'

import LogoutButton from '../../context/authO/authOlogout';

import LoginButton from '../../context/authO/authOlogin'



const Avatar = () => (
  <>
    <Message
      icon='user circle outline'
      header='Welcome back, Brook Riggio!'
      content='Current Location: Seattle'
    />
    <LoginButton />
    <LogoutButton />

  </>
)

export default Avatar;
