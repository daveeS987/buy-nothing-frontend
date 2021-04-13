import React, { useContext } from 'react';
import { Image, Grid, Input, Container } from 'semantic-ui-react';
import { When } from 'react-if';

import LoginButton from '../../context/authO/authOlogin';
import { LoginContext } from '../../context/auth/context.js';

function Avatar() {
  let userContext = useContext(LoginContext);
  let userImageUrl = userContext.user.userPicture;

  let message = userContext.isLoggedIn
    ? `Welcome, ${userContext.userName}!`
    : 'Welcome! Please Sign In';

  return (
    <>
      <Grid>
        <Grid.Column>
          <Grid.Row style={{ height: '60%', display: 'block', padding: '1em' }}>
            <Image
              style={{ display: 'block', padding: '1.5em' }}
              src={userImageUrl}
              size="small"
              centered
              circular
            />
          </Grid.Row>

          <Grid.Row></Grid.Row>

          <Grid.Row style={{ textAlign: 'center', paddingRight: '2em' }}>
            <Container
              textAlign="center"
              style={{ display: 'block', padding: '1em' }}
            >
              <p>{message}</p>
            </Container>

            <When condition={!userContext.isLoggedIn}>
              <LoginButton />
            </When>

            <When condition={userContext.isLoggedIn}>
              <Input
                fluid
                icon={{ name: 'search', circular: true, link: true }}
                placeholder="Search..."
              />
            </When>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Avatar;
