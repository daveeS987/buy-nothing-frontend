import React, {useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {LoginContext} from '../auth/context.js'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const userContext = useContext(LoginContext);
  
  useEffect(() => {
    if(isAuthenticated) {
      console.log('userContext.Login got triggered and will try to login')
      userContext.login(user.email, user.name, user.picture);
    }
  }, [isAuthenticated])
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img style={{border: "3px solid green", height: "100%"}} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;