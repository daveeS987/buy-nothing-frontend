import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; //
import cookie from 'react-cookies';
import './authButton.css';

const LogoutButton = () => {
  const { logout } = useAuth0(); //

  function handleLogOut() {
    //
    logout({ returnTo: `${process.env.REACT_APP_REDIRECT}` }); //
    cookie.remove('auth'); //
  } // onClick=blabjabh

  return (
    <button className="ui button customButton" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogoutButton;
