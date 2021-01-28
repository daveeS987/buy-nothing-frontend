import React, { useContext } from 'react'// bring this in
import { Message, Card, Feed, Image, Grid, Row, Column, Input} from 'semantic-ui-react'
import {  When } from 'react-if';

import LogoutButton from '../../context/authO/authOlogout';// bring in
import LoginButton from '../../context/authO/authOlogin'

import {LoginContext} from '../../context/auth/context.js';// bring in


function Avatar(){

  let userContext = useContext(LoginContext); // bring
  let userImageUrl = userContext.user.userPicture;

  console.log('usercontext.user', userContext.user)

  let message = userContext.isLoggedIn ? `Welcome, ${userContext.userName}!` : 'Welcome! Please Sign In'

  return (
    <>

      <Grid>
        <Grid.Column>
        <Grid.Row style={{border: "3px dashed purple", height:"60%"}}>
          {/* <div style={{ width: "100%", display: "block" }}>
          </div> */}
      <Image src={userImageUrl} size='small' centered circular />
        </Grid.Row>

        <Grid.Row style={{border: "3px dashed purple"}}>  
      <Message header={message} size="mini" />
      <When condition={!userContext.isLoggedIn}>
        <LoginButton />
      </When>

      <When condition={userContext.isLoggedIn}>
        {/* <LogoutButton /> */}
      </When>
        <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
            />
       </Grid.Row>
       </Grid.Column>
      </Grid>
    </>
  )
} 

// 30 -32
export default Avatar;

