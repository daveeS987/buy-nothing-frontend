import React, { useState, useContext } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Grid, Button, Header, Icon, Message } from 'semantic-ui-react';
import ListItems from '../list/ListItems.js';
import { useAuth0 } from "@auth0/auth0-react";
import UploadModal from '../uploadPost/uploadModal.js';


function MyFeedGrid() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [view, setView] = useState('myPost');
  console.log('view', view);



  return (
    <>

      <Grid>
        


      <If condition={isAuthenticated}>
        <Then>
        <Grid.Row columns={5}>
          <Grid.Row></Grid.Row>
          <Grid.Column></Grid.Column>

          <Grid.Column textAlign="center">
            <Button basic color='teal' onClick={() => setView('myPost')}>
              My Posts
            </Button>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Button basic color='teal' onClick={() => setView('imFollowing')}>
              Posts I'm Following
            </Button>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <UploadModal />
          </Grid.Column>

          <Grid.Column >

          </Grid.Column >
        </Grid.Row>
          </Then>

          <Else>
            <Grid.Row columns={5}>
              <Grid.Row></Grid.Row>
              <Grid.Column></Grid.Column>

              <Grid.Column textAlign="center">
              </Grid.Column>

              <Grid.Column textAlign="center">
                <Message>
                  Please Login to Post!
                </Message>
              </Grid.Column>

              <Grid.Column textAlign="center">
              </Grid.Column>

              <Grid.Column >

              </Grid.Column >
            </Grid.Row>
          </Else>
      </If>


        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>

          <Grid.Column centered width={10}>


            <ListItems />
          </Grid.Column>

          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </>
  );
}

export default MyFeedGrid;
