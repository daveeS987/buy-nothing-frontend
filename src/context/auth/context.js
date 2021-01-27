import React, {useState, useEffect} from 'react';
import superagent from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (input) => {
    const API = process.env.REACT_APP_API;
    const LocalHost = 'http://localhost:5000';

    try {

      const response = await superagent.post(`${LocalHost}/authZero`).send({email:input})

      console.log('Login response came back from API');
      const {user} = response.body;
      const {token} = response.body;

      validateToken(token, user);

    } catch(e) {
      console.warn('Login Attempt Failed');
    }
  }


  const validateToken = (token, validUser) => {

    try {
      let tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET)

      // if we're here, the token was good
      setIsLoggedIn(true);
      setUser(validUser)
      // console.log(validUser)
      // console.log('tokenUser-------', tokenUser);
      cookie.save('auth', token);
      console.log('Token has been validated');
      // set a cookie so that we can stay logged in
      // Optionally, make it only last 1 hour or until you close
    } catch(e) {
      setIsLoggedIn(false);
      setUser({});
      console.warn("Token Validation Error");
    }
  }


  const guestLogin = () => {
    setIsLoggedIn(true);
    setUser({
      username: 'guest',
      role: 'guest',
      permissions: ['read']
    })
  }

  const logout = () => {
    setIsLoggedIn(false);
    setUser({});
  }

  useEffect( () => {
    const token = cookie.load('auth') || null;
    validateToken(token);
  },[])


  return (
    <LoginContext.Provider
      value={ {isLoggedIn, user, login, logout, guestLogin} }
    >
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
