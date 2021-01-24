import React, { useState } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import Header from '../components/header.js';
import SideBar from '../components/sidebar.js';
import HomeView from '../components/homeView/homegrid.js'
import MyFeedView from '../components/myFeedView/myfeedgrid.js'


function Main() {

  const [view, setView] = useState('home');

  function changeView(newView) {
    setView(newView);
  }

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

          <Case condition={view==='welcome'}>
            <MyFeedView />
          </Case>
        </Switch>

    </>
  )
}

export default Main;