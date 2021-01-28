import React, { useContext } from 'react'// bring this in
import { Message, Card, Feed, Image, Grid, Row, Column} from 'semantic-ui-react'
import {  When } from 'react-if';

import LogoutButton from '../../context/authO/authOlogout';// bring in
import LoginButton from '../../context/authO/authOlogin'

import {LoginContext} from '../../context/auth/context.js';// bring in


function Avatar(){

  let userContext = useContext(LoginContext); // bring
  let userImageUrl = userContext.user.userPicture;

  console.log('usercontext.user', userContext.user)

  let message = userContext.isLoggedIn ? `Welcome Back ${userContext.userName}!` : 'Welcome! Please Sign In'

  return (
    <>


      <Image src={userImageUrl} size='small' centered circular />
      <Message header={message} size="mini" />
      <When condition={!userContext.isLoggedIn}>
        <LoginButton />
      </When>

      <When condition={userContext.isLoggedIn}>
        {/* <LogoutButton /> */}
      </When>
        {/* <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
            /> */}
    </>
  )
} 

// 30 -32
export default Avatar;

