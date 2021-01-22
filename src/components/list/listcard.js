import React from 'react'
import { Card, Grid, Icon, Image} from 'semantic-ui-react'
import ListModal from './listmodal.js'

function ListCard (){

  return(


    <Card fluid centered>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width="8" >

        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={true} />
        </Grid.Column>

        <Grid.Column width="8" >
          <Card.Content>
            <Card.Header>List Item</Card.Header>
            <Card.Meta>Location</Card.Meta>
            <Card.Description>
              Item Description. Item Description. Item Description. Item Description. Item Description. Item Description. Item Description.
            </Card.Description>
            <ListModal/>
            </Card.Content>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Card>
    
  )
}

export default ListCard