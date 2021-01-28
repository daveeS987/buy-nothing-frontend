import React, { useState } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Grid, Button, Header, Icon } from 'semantic-ui-react';
import ListItems from '../list/ListItems.js';

import UploadModal from '../uploadPost/uploadModal.js';


function MyFeedGrid() {

  const [view, setView] = useState('myPost');
  console.log('view:', view);

  return (
    <>

      <Grid>
        
        <Grid.Row columns={5}>
          <Grid.Row></Grid.Row>
          <Grid.Column></Grid.Column>

          <Grid.Column textAlign="center">
            <Button basic color='teal' onClick={() => setView('myPost')}>
              My Post
            </Button>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Button basic color='teal' onClick={() => setView('postImFollowing')}>
              Posts I'm Following
            </Button>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <UploadModal />
          </Grid.Column>

          <Grid.Column ></Grid.Column >
        </Grid.Row>


        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>

          <Grid.Column centered width={10}>

            <If condition={view==='myPost'}>
              <Then>
                <ListItems filterBy={'myPost'}/>
              </Then>
              <Else>
                <ListItems filterBy={'postImFollowing'}/>
              </Else>
            </If>

            {/* <ListItems /> */}
          </Grid.Column>

          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </>
  );
}

export default MyFeedGrid;
