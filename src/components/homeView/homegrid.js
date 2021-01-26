import React, {useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import ListItem from '../list/ListItems';
import SearchComponent from './search.js';
import Profile from '../../context/authO/profile.js';


function HomeGrid() {

  return (
    <>
      <Grid>

          <Grid.Column width={5}>
          </Grid.Column>

          <Grid.Column centered width={6}>
            <Profile/>
            <SearchComponent/>
            <ListItem />
          </Grid.Column>

          <Grid.Column width={10}>
          </Grid.Column>

      </Grid>
    </>
  )
}


export default HomeGrid;