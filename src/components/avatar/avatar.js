import React, { useContext } from 'react'// bring this in
import { Image, Grid, Input, Container } from 'semantic-ui-react'
import {  When } from 'react-if';

// import LogoutButton from '../../context/authO/authOlogout';// bring in
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
          {/* IMAGE ROW */}
        <Grid.Row  style={{ height:"60%", display: "block", padding: "1em" }} >
          {/* <div style={{ width: "100%", display: "block" }}>
          </div> */}
      <Image style={{ display: "block", padding: "1.5em" }} src={userImageUrl} size='small' centered circular />
        </Grid.Row>
        <Grid.Row >

        </Grid.Row>

          {/* WELCOME */}
        <Grid.Row style={{ textAlign: "center", paddingRight: "2em"}}  >  
      {/* <Message info header={message} size="mini" /> */}
      <Container textAlign='center' style={{ display: "block", padding: "1em" }}>
    <p>
      {message}
    </p>
      
  </Container>

      <When condition={!userContext.isLoggedIn}>
       
        <LoginButton/>

      </When>

      <When condition={userContext.isLoggedIn}>
        {/* <LogoutButton /> */}
        <Input fluid
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
              />
              </When>
       </Grid.Row>
       </Grid.Column>
      </Grid>
    </>
  )
} 

// 30 -32
export default Avatar;

