import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Grid, Button, Header, Icon, Message } from 'semantic-ui-react';
import ListItems from '../list/ListItems.js';
import { useAuth0 } from "@auth0/auth0-react";
import UploadModal from '../uploadPost/uploadModal.js';

import {changeCategory} from '../../store/category.js';

function MyFeedGrid() {
  
  const dispatch = useDispatch()
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [view, setView] = useState('myPost');

  return (
    <>

      <Grid>
        
      <If condition={isAuthenticated}>
        <Then>
        <Grid.Row columns={5}>
          <Grid.Row></Grid.Row>
          <Grid.Column></Grid.Column>

          <Grid.Column textAlign="center">
            <Button basic color='teal' onClick={() => dispatch(changeCategory('myPost'))}>
              My Post
            </Button>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Button basic color='teal' onClick={() => dispatch(changeCategory('default'))}>
              All Items
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

            {/* <If condition={view==='myPost'}>
              <Then> */}
                <ListItems filterBy={'myPost'}/>
              {/* </Then>
              <Else>
                <ListItems/>
              </Else>
            </If> */}

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
