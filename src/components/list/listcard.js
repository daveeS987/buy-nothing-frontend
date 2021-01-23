import React from 'react'
import { Card, Grid, Icon, Image} from 'semantic-ui-react'
// import ListModal from './listmodal.js'
import ModalExampleScrollingContent from './listmodal.js'

function ListCard (){

  return(


    <Card fluid centered>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width="8" >

        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={true} />
        </Grid.Column>

        <Grid.Column width="8" >
          <Card.Content style={{
            textAlign: "left"

            }}>
            <Card.Meta >Author // Location</Card.Meta>
            <Card.Header>TITLE OF POST - GRAB FROM CREATED POST IN BACK  END</Card.Header>
            {/* <Card.Description>
              Item Description. Item Description. Item Description. Item Description. Item Description. Item Description. Item Description.
            </Card.Description> */}
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