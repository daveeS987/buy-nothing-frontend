import LoginButton from '../components/authZeroLoginButton/loginButton.js';
import { Grid } from 'semantic-ui-react';
import LogoImage from '../components/logo/logo.js';

function WelcomePage() {
  return (
    <Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <LogoImage />
        <LoginButton />
      </Grid.Column>
    </Grid>
  );
}

export default WelcomePage;
