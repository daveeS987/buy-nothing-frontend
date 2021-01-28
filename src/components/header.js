import { Header, Grid } from 'semantic-ui-react'
import Avatar from '../components/avatar/avatar.js'
import LogoImage from './logo/logo.js'
import './header.css';


export default function HeaderComponent() {

  return (

    <Grid columns={5} >
      <Grid.Row >

        {/* COLUMN ONE */}
      <Grid.Column >
        {/* divs for seeing the grid */}
      </Grid.Column>

         {/* COLUMN TWO */}
      <Grid.Column >
      


        {/* <Header as='h2' icon textAlign='center'>

        </Header> */}
        
      </Grid.Column>

       {/* COLUMN THREE */}
      <Grid.Column >

      <LogoImage/>

      {/* <Image src='logo/BNLogo3.svg' fluid /> */}
      

      </Grid.Column>

      {/* COLUMN FOUR */}
      <Grid.Column >

              <Header as='h2' icon textAlign='center'>

              </Header>
            </Grid.Column>


      {/* COLUMN FIVE */}
      <Grid.Column > 
        <Avatar />
        {/* <Login /> */}
      </Grid.Column>

      </Grid.Row>



    </Grid>


  )
}

