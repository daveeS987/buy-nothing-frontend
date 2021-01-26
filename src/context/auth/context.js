import React, {useState, useEffect} from 'react';
import superagent from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');

  const signUp = async(input) => {

    const API = process.env.REACT_APP_API;

    try{
      const response = await superagent.post(`${API}/signup`).send(input);
      // login(input);

    } catch(e) {
      console.warn('Something Bad Happened. Error in Signing Up')
    }
  }

  const login = async (input) => {
    const API = process.env.REACT_APP_API;

    const LocalHost = 'http://localhost:5000';

    try {
      // const response = await superagent.post(`${API}/signin`)
      //   .auth( input.username, input.password );
      const response = await superagent.post(`${LocalHost}/authZero`).send({email:input})

      console.log('response line 37:', response.body);
      // This is the ID that MONGO gives
      setUserId(response.body.user._id)
      // console.log('userId is now set to use in context:', userId);

      const {token} = response.body;
      validateToken(token);

    } catch(e) {
      console.warn('Login Attempt Failed');
    }
  }


  const validateToken = (token) => {

    try {
      let tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET)

      // if we're here, the token was good
      setIsLoggedIn(true);
      setUser(tokenUser)
      // console.log('tokenUser', tokenUser);
      cookie.save('auth', token);
      console.log('Succesfully logged in');
      // set a cookie so that we can stay logged in
      // Optionally, make it only last 1 hour or until you close
    } catch(e) {
      setIsLoggedIn(false);
      setUser({});
      setUserId('')
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
    setUserId('guest');
  }

  const logout = () => {
    setIsLoggedIn(false);
    setUser({});
    setUserId('')
  }

  useEffect( () => {
    const token = cookie.load('auth') || null;
    validateToken(token);
  },[])


  return (
    <LoginContext.Provider
      value={ {isLoggedIn, user, userId, login, logout, guestLogin, signUp} }
    >
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
