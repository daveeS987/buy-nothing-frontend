import React, { useState } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';


import HeaderComponent from '../components/header.js';
import SideBarComponent from '../components/sidebar.js';
import HomeView from '../components/homeView/homegrid.js'
import MyFeedView from '../components/myFeedView/myfeedgrid.js'


function HomePage() {

  // This state is just to toggle between homeview/myFeedView
  // This is HARDCODED for DEVELOPMENT PURPOSES
  const [view, setView] = useState('home');

  function changeToHomeView() {
    
  }

  return (
    <>
        <HeaderComponent />
        <SideBarComponent />

        <If condition={view==='feed'}>
          <Then>
            <HomeView/>
          </Then>
          <Else>
            <MyFeedView />
          </Else>
        </If>
 
    </>
  )
}


export default HomePage;