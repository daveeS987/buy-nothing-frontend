import { Grid } from 'semantic-ui-react';
import Avatar from '../avatar/avatar.js';
import Logo from '../logo/logo.js';
import './header.css';

export default function HeaderComponent() {
  return (
    <Grid columns={5}>
      <Grid.Row style={{ height: '150%', display: 'block', padding: '1em' }}>
        {/* COLUMN ONE */}
        <Grid.Column></Grid.Column>

        {/* COLUMN TWO */}
        <Grid.Column></Grid.Column>

        {/* COLUMN THREE */}
        <Grid.Column style={{ height: '150%' }}>
          <Logo />
        </Grid.Column>

        {/* COLUMN FOUR */}
        <Grid.Column></Grid.Column>

        {/* COLUMN FIVE */}
        <Grid.Column>
          <Avatar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
