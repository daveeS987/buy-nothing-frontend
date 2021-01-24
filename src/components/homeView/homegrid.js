import React, {useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import ListItem from '../list/ListItems';
import SearchComponent from './search.js';

import {getListings} from '../../store/listings.js';

function HomeGrid() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings())
  }, [])

  let listings = useSelector(state => state.listings)

  console.log('listings:', listings);
  
  return (
    <>
      <Grid>

          <Grid.Column width={5}>
          </Grid.Column>

          <Grid.Column centered width={6}>
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