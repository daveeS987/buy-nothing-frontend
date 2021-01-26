import React, {useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {LoginContext} from '../auth/context.js'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const userContext = useContext(LoginContext);
  
  useEffect(() => {
    
    console.log('use effect authzero ran')
    if(user) {
      console.log('inside if statement:', user.email)
      userContext.login(user.email);
    }
  }, [user])
  

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