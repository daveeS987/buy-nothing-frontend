import React from 'react'
import { Card, Grid, Icon, Image} from 'semantic-ui-react'
// import ListModal from './listmodal.js'
import ModalExampleScrollingContent from './listmodal.js'

function ListCard (props){

  console.log('props.item from listcard line 8:', props.item);

  // console.log( 'props.item.title', props.item.title)
  // console.log( 'props.item.description', props.item.description)

  return(


    <Card fluid centered>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width="8" >

        <Image size='medium' src={props.item.imageUrl} wrapped ui={true} />
        </Grid.Column>

        <Grid.Column width="8" >
          <Card.Content style={{
            textAlign: "left"

            }}>
            <Card.Header>{props.item.title}</Card.Header>
            <Card.Meta >{props.item.location}</Card.Meta>
            <Card.Description>
            {props.item.description}
            </Card.Description>
            {/* <ListModal/> */}
            <ModalExampleScrollingContent/>
            </Card.Content>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Card>
    
  )
}

export default ListCard