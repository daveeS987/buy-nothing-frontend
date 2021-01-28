import LoginButton from '../context/authO/authOlogin.js';
import LogoutButton from '../context/authO/authOlogout.js';
import { Grid } from 'semantic-ui-react'
import LogoImage from '../components/logo/logo.js'

function WelcomePage() {

  return (
    <>
    
    <Grid container columns={3} centered >
    
    <Grid.Row>  
    <Grid.Column>
      
    </Grid.Column> 
    <Grid.Column  style={{ height: "10em"}} >
    {/* for spacing */}
    </Grid.Column>
    <Grid.Column>
      
    </Grid.Column>
    </Grid.Row>

    {/* ROW 2 */}

    <Grid.Row>  
    <Grid.Column>
      
    </Grid.Column>
    <Grid.Column>
    <LogoImage/>
    </Grid.Column>
    <Grid.Column>
      
    </Grid.Column>
    </Grid.Row>

    {/* ROW 3: Button Spacing */}
    <Grid.Row columns={7}>  

    <Grid.Column >
      
    </Grid.Column>

    <Grid.Column >
    </Grid.Column>

    <Grid.Column >
      
    <LoginButton />

    </Grid.Column>

    <Grid.Column >
      {/* add sign up  */}
    <LogoutButton /> 

    </Grid.Column>
    <Grid.Column >
      
    </Grid.Column>
    <Grid.Column >
      
    </Grid.Column>

    </Grid.Row>
  </Grid>


      

      
      

    </>
  )
}

export default WelcomePage