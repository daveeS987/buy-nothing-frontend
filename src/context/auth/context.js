import React, {useState, useEffect} from 'react';
import superagent from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState('');

  /*
    user will have the following properties:

    username: 
    userEmail: 
    userPicture: picture url
    role: 
    permissions: 
    myListings: 
    followedListings: 
    mongoId: 

  */

  const login = async (input1, input2, input3) => {

    // *** If api is having issues check .env to see if its using localhost or deployed backend
    const API = process.env.REACT_APP_API;

    try {

      const response = await superagent.post(`${API}/authZero`).send({email:input1, name:input2, picture:input3})

      console.log('Login got triggered and came back with response from API');
      // const {user} = response.body;
      const {token} = response.body;

      validateToken(token);

    } catch(e) {
      console.warn('Login Attempt Failed');
    }
  }


  const validateToken = (token) => {

    try {
      let tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET)

      if(tokenUser.username) {
        setIsLoggedIn(true);
        console.log('isLogged in turned to true');
      }
      setUser(tokenUser)
      setUserName(tokenUser.username)
      console.log('user object that is set in context:', tokenUser);
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
      value={ {isLoggedIn, user, userName, login, logout, guestLogin} }
    >
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
