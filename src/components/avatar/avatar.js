import React, { useContext } from 'react'
import {Icon, Message, Button } from 'semantic-ui-react'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import LogoutButton from '../../context/authO/authOlogout';
import LoginButton from '../../context/authO/authOlogin'

import {LoginContext} from '../../context/auth/context.js';

function Avatar(){

  let userContext = useContext(LoginContext);

  let message = userContext.isLoggedIn ? `Welcome Back ${userContext.userName}!` : 'Welcome! Please Sign In'

  return (
    <>
      <Message
        icon='user circle outline'
        header={message}
      />

      <When condition={!userContext.isLoggedIn}>
        <LoginButton />
      </When>

      <When condition={userContext.isLoggedIn}>
        <LogoutButton />
      </When>
    </>
  )
} 

export default Avatar;

