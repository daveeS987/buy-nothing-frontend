import { Link } from "react-router-dom";
import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Input, Grid} from 'semantic-ui-react'


import SidebarComponent from '../sidebar.js';
import ListItem from '../list/ListItems';
import SearchComponent from '../search/search.js';
import Avatar from '../avatar/avatar.js'

function HomeGrid() {

  return (
    <>


      <Grid>

          <Grid.Column width={3}>
            <SidebarComponent />
          </Grid.Column>

          <Grid.Column width={10}>
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