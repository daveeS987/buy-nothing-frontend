import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Button } from 'semantic-ui-react'

function CardComponent(props) {

  return (


    <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />

    <Card.Content>
      <Card.Header>Item Title</Card.Header>
      <Card.Meta>Item Location</Card.Meta>
      <Card.Description>
        Item Description.  Item Description.  Item Description.  Item Description.  Item Description.  Item Description.  Item Description.  Item Description.  Item Description.  Item Description.  Item Description. 
      </Card.Description>
    </Card.Content>

    <Card.Content extra>
      <Button size='large'>
        More Details
      </Button>
    </Card.Content>

  </Card>  
  
  



  )
}

export default CardComponent;