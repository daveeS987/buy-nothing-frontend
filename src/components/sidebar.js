import { Link } from "react-router-dom";

import { Icon, Menu, Sidebar,} from 'semantic-ui-react'


export default function SidebarComponent() {

  return (

    <>

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

    </>
  )

}