import React, { useContext } from 'react';
import { If, Then, Else } from 'react-if';
import { Grid, Message } from 'semantic-ui-react';
import List from '../list/list.js';
import UploadModal from '../uploadModal/uploadModal.js';

import { LoginContext } from '../../context/loginContext.js';

function MyFeedGrid() {
  let userContext = useContext(LoginContext);

  return (
    <>
      <Grid>
        <If condition={userContext.isLoggedIn}>
          <Then>
            <Grid.Row columns={5}>
              <Grid.Row></Grid.Row>
              <Grid.Column></Grid.Column>

              <Grid.Column textAlign="center"></Grid.Column>

              <Grid.Column textAlign="center">
                <UploadModal />
              </Grid.Column>

              <Grid.Column textAlign="center"></Grid.Column>

              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Then>

          <Else>
            <Grid.Row columns={5}>
              <Grid.Row></Grid.Row>
              <Grid.Column></Grid.Column>

              <Grid.Column textAlign="center"></Grid.Column>

              <Grid.Column textAlign="center">
                <Message>Please Login to Post!</Message>
              </Grid.Column>

              <Grid.Column textAlign="center"></Grid.Column>

              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Else>
        </If>

        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>

          <Grid.Column centered width={10}>
            <List filterBy={'myPost'} />
          </Grid.Column>

          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default MyFeedGrid;
