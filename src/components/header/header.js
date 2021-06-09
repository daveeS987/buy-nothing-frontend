import { Grid } from 'semantic-ui-react';
import Avatar from '../avatar/avatar.js';
import Logo from '../logo/logo.js';
import './header.css';

export default function HeaderComponent() {
  return (
    <Grid columns={5}>
      <Grid.Row
        verticalAlign="middle"
        style={{ height: '100%', display: 'block', padding: '1em' }}
      >
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>

        <Grid.Column>
          <Logo className="logoimage" />
        </Grid.Column>

        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Avatar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
