import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import cookie from 'react-cookies';

const LogoutButton = () => {
  const { logout } = useAuth0();

  function handleLogOut() {
    logout({ returnTo: `${process.env.REACT_APP_REDIRECT}/welcome` })
    cookie.remove('auth');
  }

  return (
    <button class="ui button" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogoutButton;