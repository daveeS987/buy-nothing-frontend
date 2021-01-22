import React from 'react'
import {Grid, Pagination} from 'semantic-ui-react'
import ListCard from './listcard.js'


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
      {/* <Grid.Column></Grid.Column> */}
        <Grid.Column textAlign="center" width="12" verticalAlign>
          <ListCard /> 
          <ListCard /> 
          <ListCard /> 
          <ListCard /> 
          <ListCard /> 
          <ListCard />     
        </Grid.Column>
      {/* <Grid.Column></Grid.Column> */}
      </Grid.Row>
     
      {/* TODO: THIS SHOULD PROBALBY GO IN A FOOTER? OR IN A DIV? PROBABLY NOT IN THE GRID, RESEARCH */}
      <PaginationExampleShorthand />
    </Grid>
  
  

);
    }

export default ListItems
