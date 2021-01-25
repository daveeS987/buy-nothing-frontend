import React, { useContext, useState }from 'react';
import {If, Then, Else, When} from 'react-if';


import {LoginContext} from '../../context/auth/context.js';


function SignUp (props) {

  const userContext = useContext(LoginContext);
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    userContext.signUp(user);
  }

  const handleChange = (e) => {
    setUser( { ...user, [e.target.name]: e.target.value })
  }

  return(
    <When condition={!userContext.isLoggedIn}>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange} />
          <button type="submit">Sign Up</button>
        </form>
    </When>

  )
}

export default SignUp;