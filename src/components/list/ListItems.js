import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import {Grid, Pagination} from 'semantic-ui-react'
import ListCard from './listcard.js'


function ListItems (){

  /*
  async function getAll() {
    let raw = await axios(
      {
        method: 'GET',
        url: 'https://davee-auth-api-server.herokuapp.com/api/v1/todo'
      });
      if(raw) {
        let sorter = sortHelper(raw.data.results);
        setItemList(sorter);
        updateActive(sorter);
      }
  }
  */

  async function getAll() {
      let raw = await axios(
        {
          method: 'GET',
          url: 'https://davee-auth-api-server.herokuapp.com/api/v2/listings'
        });
        console.log('raw', raw.data);
  }


    useEffect( () => {
      getAll();
    }, [])

  const PaginationExampleShorthand = () => (
    <Pagination
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={3}
    />
  )

return(
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column textAlign="center" width="12" style={{
          margin : "auto"
          }}verticalAlign>

          <ListCard /> 
  
        </Grid.Column>
      </Grid.Row>
     
      {/* TODO: THIS SHOULD PROBALBY GO IN A FOOTER? OR IN A DIV? PROBABLY NOT IN THE GRID, RESEARCH */}
      <PaginationExampleShorthand />
    </Grid>
  
  

);
    }

export default ListItems
