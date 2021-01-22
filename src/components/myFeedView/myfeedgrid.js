import { Link } from 'react-router-dom';
import { Grid, Button, Header, Icon } from 'semantic-ui-react';

import SidebarComponent from '../sidebar.js';
import ListItem from '../list/ListItems';
import SearchComponent from '../search/search.js';

function MyFeedGrid() {
  return (
    <>
  
      <Grid>
      <Header as='h3' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>BuyNothing</Header.Content>
        </Header>
        <Grid></Grid>
        <Grid.Row columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row columns={5}>
        <Grid.Column>
            
          </Grid.Column>
          <Grid.Column>
            <Button />
          </Grid.Column>
          <Grid.Column>
            <Button>
              My Post
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button>
              Posts I'm Following
            </Button>
            
          </Grid.Column>
          <Grid.Column>
          <Button>
              Create a Post
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default MyFeedGrid;
