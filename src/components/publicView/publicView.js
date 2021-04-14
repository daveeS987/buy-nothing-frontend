import React from 'react';
import { Grid } from 'semantic-ui-react';

import ListItem from '../list/list';
import Categories from '../categories/categories.js';

function PublicView() {
  return (
    <>
      <Grid>
        <Grid.Row></Grid.Row>
        {/* LEFT COLUMN */}
        <Grid.Column width={5} style={{ height: '100%' }}></Grid.Column>

        {/* CENTER COLUMN */}
        <Grid.Column centered width={7} style={{ height: '100%' }}>
          <Categories />
          <ListItem />
        </Grid.Column>

        {/* RIGHT COLUMN */}
        <Grid.Column width={4} style={{ height: '100%' }}></Grid.Column>
      </Grid>
    </>
  );
}

export default PublicView;
