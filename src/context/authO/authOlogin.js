import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  async function handleClick() {
    loginWithRedirect();
  }

  return <button class="ui button" onClick={handleClick}>Log In</button>;
};

export default LoginButton;