import React from 'react'
import { Card, Grid, Image} from 'semantic-ui-react'
import ListModal from './listmodal.js'

function ListCard (props){

  return(

    <Card fluid centered>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width="8" >

        <Image size='medium' src={props.item.imageUrl} wrapped ui={true} style={{ margin: "1rem", textAlign: "center"}} rounded />
        </Grid.Column>

        <Grid.Column width="8" >
          <Card.Content style={{
            textAlign: "left", marginTop: "2rem"

            }}>
            <Card.Header>{props.item.title}</Card.Header>
            <Card.Meta >{props.item.location}</Card.Meta>
            <Card.Description>
            {/* This makes the cards feel busy to me? Idk.  whatever you guys think. --Ryan{props.item.description} */}
            </Card.Description>
            
            <ListModal object={props.item} style={{ marginTop: "1rem"}}/>
          </Card.Content>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Card>
    
  )
}

export default ListCard