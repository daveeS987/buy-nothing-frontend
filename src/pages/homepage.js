import { Link } from "react-router-dom";
import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Input, Grid} from 'semantic-ui-react'

import CardComponent from '../components/card.js';
import SidebarComponent from '../components/sidebar.js';
import HeaderComponent from '../components/header.js';
import ListItem from '../components/list/ListItems';
import SearchComponent from '../components/search/search.js';

function HomePage() {

  return (
    <>


      <Grid>

        <Grid.Row></Grid.Row>

        <Grid.Row>
          <HeaderComponent />
        </Grid.Row>
       
        <Grid.Row>

          <Grid.Column width={3}>
            <SidebarComponent />
          </Grid.Column>

          <Grid.Column width={10}>
            <SearchComponent/>
            <ListItem />
          </Grid.Column>

          <Grid.Column width={3}>
            
          </Grid.Column>

        </Grid.Row>


      </Grid>

     
     

      



    </>
  )
}






export default HomePage;