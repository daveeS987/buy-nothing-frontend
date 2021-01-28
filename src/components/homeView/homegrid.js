import React from 'react';
// import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import ListItem from '../list/ListItems';
import SearchComponent from './search.js';


function HomeGrid() {


  return (
    <>
      <Grid>
          <Grid.Row>
          </Grid.Row>
          {/* LEFT COLUMN */}
          <Grid.Column width={5} style={{height: "100%"}}>
          </Grid.Column>

          {/* CENTER COLUMN */}
          <Grid.Column centered width={7} style={{ height: "100%"}}>

            <SearchComponent/>
            <ListItem />

          </Grid.Column>

          {/* RIGHT COLUMN */}
          <Grid.Column width={4} style={{ height: "100%"}} >
          </Grid.Column>

      </Grid>
    </>
  )
}


export default HomeGrid;