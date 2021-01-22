import { Link } from "react-router-dom";

import { Label, Header, Icon, Image, Menu, Segment, Sidebar, Card, Button } from 'semantic-ui-react'


export default function SidebarComponent() {

  return (

    <>


    {/* <Sidebar.Pushable as={Segment}> */}
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='comments outline' />
        Messages
      </Menu.Item>

    </Sidebar>

    {/* <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher> */}
  {/* </Sidebar.Pushable> */}

    </>
  )

}