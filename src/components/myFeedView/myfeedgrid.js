import React, {useContext} from 'react';
import { If, Then, Else} from 'react-if';
import { Grid, Message } from 'semantic-ui-react';
import ListItems from '../list/ListItems.js';
import UploadModal from '../uploadPost/uploadModal.js';

import {LoginContext} from '../../context/auth/context.js';

function MyFeedGrid() {
  
  let userContext = useContext(LoginContext);

  return (
    <>

      <Grid>
        
      <If condition={userContext.isLoggedIn }>
        <Then>
        <Grid.Row columns={5}>
          <Grid.Row></Grid.Row>
          <Grid.Column></Grid.Column>

          <Grid.Column textAlign="center">
            {/* <Button basic color='teal' onClick={() => dispatch(changeCategory('myPost'))}>
              My Post
            </Button> */}
          </Grid.Column>

          <Grid.Column textAlign="center">
          <UploadModal />
          </Grid.Column>

          <Grid.Column textAlign="center">

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
