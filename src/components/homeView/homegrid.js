import { Grid } from 'semantic-ui-react'

import ListItem from '../list/ListItems';
import SearchComponent from './search.js';


function HomeGrid() {

  return (
    <>
      <Grid>

          <Grid.Column width={3}>
          </Grid.Column>

          <Grid.Column centered width={10}>
            <SearchComponent/>
            <ListItem />
          </Grid.Column>

          <Grid.Column width={3}>
          </Grid.Column>

      </Grid>
    </>
  )
}


export default HomeGrid;