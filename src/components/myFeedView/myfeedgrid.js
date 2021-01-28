import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Grid, Button, Header, Icon } from 'semantic-ui-react';
import ListItems from '../list/ListItems.js';

import UploadModal from '../uploadPost/uploadModal.js';

import {changeCategory} from '../../store/category.js';

function MyFeedGrid() {

  const dispatch = useDispatch()

  const [view, setView] = useState('myPost');
  console.log('view----------------------:', view);

  return (
    <>

      <Grid>
        
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

          <Grid.Column ></Grid.Column >
        </Grid.Row>


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
