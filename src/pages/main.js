import React, {useState, useEffect, useContext} from 'react';
import {useDispatch} from 'react-redux';
import { Switch, Case} from 'react-if';
import { useAuth0 } from "@auth0/auth0-react";

import {LoginContext} from '../context/auth/context.js';

import Header from '../components/header.js';

import SideBar from '../components/sidebar.js';
import HomeView from '../components/homeView/homegrid.js'
import MyFeedView from '../components/myFeedView/myfeedgrid.js'

import {getListings} from '../store/listings.js';


function Main() {
  
  const dispatch = useDispatch();
  const [view, setView] = useState('home');
  const userContext = useContext(LoginContext);
  const { user, isAuthenticated } = useAuth0();

  function changeView(newView) {
    setView(newView);
  }

  useEffect(() => {
    if(isAuthenticated) {
      userContext.login(user.email, user.name, user.picture);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])


  useEffect(() => {
    dispatch(getListings())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
        <Header />
        <SideBar changeView={changeView}/>

        <Switch>
          <Case condition={view==='home'}>
            <HomeView />
          </Case>

          <Case condition={view==='myFeed'}>
            <MyFeedView />
          </Case>
        </Switch>

    </>
  )
}

export default Main;
