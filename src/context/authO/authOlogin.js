import React, {useContext, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {LoginContext} from '../auth/context.js'


const LoginButton = () => {
  const { loginWithRedirect ,user } = useAuth0();

  const userContext = useContext(LoginContext);

  async function handleClick() {
    loginWithRedirect();
  }

  return <button onClick={handleClick}>Log In</button>;
};

export default LoginButton;