import React, { useContext } from 'react'
import { Message} from 'semantic-ui-react'
import {  When } from 'react-if';

import LogoutButton from '../../context/authO/authOlogout';
import LoginButton from '../../context/authO/authOlogin'

import {LoginContext} from '../../context/auth/context.js';
import { Image } from 'semantic-ui-react'

function Avatar(){

  let userContext = useContext(LoginContext);
  let userImageUrl = userContext.user.userPicture;

  let message = userContext.isLoggedIn ? `Welcome Back ${userContext.userName}!` : 'Welcome! Please Sign In'

  return (
    <>
      <Message
        icon='user circle outline'
        header={message}
      />

      <Image src={userImageUrl} size='medium' circular />

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

