import { Header, Grid } from 'semantic-ui-react'
import Avatar from '../components/avatar/avatar.js'
import LogoImage from './logo/logo.js'
import './header.css';


export default function Footer() {

  return (

    <Grid columns={5} style={{border: "3px solid green", height: "100%"}} >
      <Grid.Row >

        {/* COLUMN ONE */}
      <Grid.Column >
        {/* divs for seeing the grid */}
      <div style={{border: "3px solid red", height: "100%"}}></div>
      </Grid.Column>

         {/* COLUMN TWO */}
      <Grid.Column >
      <div style={{border: "3px solid blue", height: "100%"}}></div>


        {/* <Header as='h2' icon textAlign='center'>

        </Header> */}
        
      </Grid.Column>

       {/* COLUMN THREE */}
      <Grid.Column >
      <div style={{ border: "3px solid blue" }}>
      </div>
        <h1>Footer</h1>
      {/* <LogoImage/> */}

      {/* <Image src='logo/BNLogo3.svg' fluid /> */}
      

      </Grid.Column>

      {/* COLUMN FOUR */}
      <Grid.Column >
            <div style={{border: "3px solid blue", height: "100%"}}></div>

              <Header as='h2' icon textAlign='center'>

              </Header>
            </Grid.Column>


      {/* COLUMN FIVE */}
      <Grid.Column >
      <div style={{border: "3px solid red"}}></div>  
        {/* <Avatar /> */}
        {/* <Login /> */}
      </Grid.Column>

      </Grid.Row>



    </Grid>


  )
}

