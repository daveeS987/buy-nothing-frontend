import React, { useContext } from 'react'
import {Icon, Message, Button } from 'semantic-ui-react'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import LogoutButton from '../../context/authO/authOlogout';
import LoginButton from '../../context/authO/authOlogin'

import {LoginContext} from '../../context/auth/context.js';

function Avatar(){

  let userContext = useContext(LoginContext);

  return (
    <>
      <Message
        icon='user circle outline'
        header={`Welcome Back ${userContext.userName}!`}
        // content='Current Location: Seattle'
      />

      <When condtion={!userContext.isLoggedIn}>
        <LoginButton />
      </When>
      <LogoutButton />
    </>
  )
} 

export default Avatar;

