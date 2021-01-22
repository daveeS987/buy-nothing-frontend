import React, { useState } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';


import HeaderComponent from '../components/header.js';
import SideBarComponent from '../components/sidebar.js';
import HomeView from '../components/homeView/homegrid.js'
import MyFeedView from '../components/myFeedView/myfeedgrid.js'


function HomePage() {

  const [view, setView] = useState('home');

  function changeView(newView) {
    setView(newView);
  }

  return (
    <>
        <HeaderComponent />
        <SideBarComponent changeView={changeView}/>

        <If condition={view==='home'}>
          <Then>
            <HomeView />
          </Then>
          <Else>
            <MyFeedView />
          </Else>
        </If>
 
    </>
  )
}


export default HomePage;