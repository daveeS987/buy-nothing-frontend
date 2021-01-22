import { Link } from "react-router-dom";

import { Label, Header, Icon, Image, Menu, Segment, Sidebar, Card, Button } from 'semantic-ui-react'

export default function SidebarComponent() {

  return (

    <>

    <Button.Group vertical>
      <Button size='large'>
      <Icon name='home' />
        Home
      </Button>

      <Button size='large'>
      <Icon name='comment icon' />
        Messages
      </Button>
    </Button.Group>
    </>
  )

}