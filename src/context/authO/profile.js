import React, {useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {LoginContext} from '../auth/context.js'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const userContext = useContext(LoginContext);
  
  // function timeout(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  // async function sleep(fn, ...args) {
  //     await timeout(5000);
  //     return fn(...args);
  // }

  // function anonfunc(input){
  //   console.log(input)
  // }

  useEffect(() => {
    if(isAuthenticated) {
      console.log('USEEFFECT RAN')
      userContext.login(user.email);
      
    }
  }, [isAuthenticated])
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;