import React, { useState } from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';


import HeaderComponent from '../components/header.js';
import SideBarComponent from '../components/sidebar.js';
import HomeView from '../components/homeView/homegrid.js'
import MyFeedView from '../components/myFeedView/myfeedgrid.js'


function HomePage() {

  const [view, setView] = useState('home');
  const [welcome, setWelcome] = useState('welcome')
  function changeView(newView) {
    setView(newView);
  }

  function changeWelcome(newView){
    setWelcome(newView)
  }
  
  return (
    <>
        <HeaderComponent />
        <SideBarComponent changeView={changeView} changeWelcome={changeWelcome}/>

        <If condition={view==='home'}>
          <Then>
            <HomeView />
          </Then>
          {/* <If condition={welcome='welcome'}> */}
          <Else>
            <MyFeedView />
          </Else>
        </If>
 
    </>
  )
}


export default HomePage;