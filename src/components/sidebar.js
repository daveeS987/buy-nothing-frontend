import { Icon, Menu, Sidebar, Segment} from 'semantic-ui-react'
import { useAuth0 } from "@auth0/auth0-react";//
import cookie from 'react-cookies';

export default function SidebarComponent(props) {
  
  const { logout } = useAuth0();

  function handleLogOut() {
    logout({ returnTo: `${process.env.REACT_APP_REDIRECT}` })
    cookie.remove('auth');
  }


  return (
    <>
      {/* <Sidebar.Pushable as={Segment}> */}
      <Sidebar
        as={Menu}
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
          My Feed
        </Menu.Item>
        <Menu.Item as='a' onClick={handleLogOut}>
          <Icon name='log out' />
          Log Out
        </Menu.Item>
      </Sidebar>
      {/* </Sidebar.Pushable> */}
    </>
  )

}