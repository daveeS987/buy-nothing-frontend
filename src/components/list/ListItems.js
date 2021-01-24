import React, {useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector } from 'react-redux';

import {Grid, Pagination} from 'semantic-ui-react'
import ListCard from './listcard.js'

import {getListings} from '../../store/listings.js';

function ListItems (){



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
