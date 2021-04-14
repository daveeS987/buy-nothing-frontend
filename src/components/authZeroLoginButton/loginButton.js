import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './loginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  async function handleClick() {
    loginWithRedirect();
  }

  return (
    <button className="ui button customButton" onClick={handleClick}>
      Log In{' '}
    </button>
  );
};

export default LoginButton;
