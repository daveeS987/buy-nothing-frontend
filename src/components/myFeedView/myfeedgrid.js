import React, { useState } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Grid, Button, Header, Icon } from 'semantic-ui-react';
import ListItems from '../list/ListItems.js';

import UploadModal from '../uploadPost/uploadModal.js';

import Upload from '../uploadPost/uploadForm.js';

function MyFeedGrid() {

  const [view, setView] = useState('myPost');


  return (
    <>

      <Grid>
        <Header as='h3' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>User Avatar</Header.Content>
        </Header>



        <Grid.Row columns={5}>
          <Grid.Row></Grid.Row>
          <Grid.Column></Grid.Column>

          <Grid.Column textAlign="center">
            <Button onClick={() => setView('myPost')}>
              My Post
            </Button>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Button onClick={() => setView('imFolowing')}>
              Posts I'm Following
            </Button>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Upload />
          </Grid.Column>

          <Grid.Column ></Grid.Column >
        </Grid.Row>


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
