import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react'; //
import cookie from 'react-cookies';

import { changeCategory } from '../store/category.js';
import { getListings } from '../store/listings.js';

export default function SidebarComponent(props) {
  const dispatch = useDispatch();

  const { logout } = useAuth0();

  function handleLogOut() {
    logout({ returnTo: `${process.env.REACT_APP_REDIRECT}` });
    cookie.remove('auth');
  }

  function handleMyFeedButton() {
    props.changeView('myFeed');
    dispatch(changeCategory('myPost'));
    dispatch(getListings());
  }

  function handleHomeButton() {
    props.changeView('home');
    dispatch(changeCategory(null));
    dispatch(getListings());
  }

  return (
    <>
      <Sidebar as={Menu} icon="labeled" inverted vertical visible width="thin">
        <Menu.Item as="a" onClick={handleHomeButton}>
          <Icon color="teal" name="home" />
          Home
        </Menu.Item>

        <Menu.Item as="a" onClick={handleMyFeedButton}>
          <Icon color="teal" name="comments outline" />
          My Feed
        </Menu.Item>
        <Menu.Item as="a" onClick={handleLogOut}>
          <Icon color="teal" name="log out" />
          Log Out
        </Menu.Item>
      </Sidebar>
    </>
  );
}
