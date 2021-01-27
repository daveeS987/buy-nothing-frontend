import React, {useState, useEffect} from 'react';
import superagent from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  /*
    user will have the following properties:

    followedListings: [],
    myListings: [],
    role: 'admin' >> or 
    userEmail: email,
    username: this will be email as well
    userPicture: picture url
    _id: mongoId

  */

  const login = async (input1, input2, input3) => {

    // *** If api is having issues check .env to see if its using localhost or deployed backend
    const API = process.env.REACT_APP_API;

    try {

      const response = await superagent.post(`${API}/authZero`).send({email:input1, name:input2, picture:input3})

      console.log('Login got triggered and came back with response from API');
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

      setIsLoggedIn(true);
      setUser(validUser)
      console.log('user object that is set in context:', validUser);
      cookie.save('auth', token);
      console.log('Token has been Validated');
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
