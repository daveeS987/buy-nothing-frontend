import { Icon, Menu, Sidebar,} from 'semantic-ui-react'

export default function SidebarComponent(props) {

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
        <Menu.Item as='a' onClick={() => props.changeView('home')}>
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item as='a' onClick={() => props.changeView('myFeed')}>
          <Icon name='comments outline' />
          Messages
        </Menu.Item>

        <Menu.Item as='a' onClick={() => props.changeWelcome('welcome')}>
          <Icon name='comments outline' />
          Welcome
        </Menu.Item>
      </Sidebar>
    </>
  )

}