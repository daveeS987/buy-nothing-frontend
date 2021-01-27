import React, {useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import Header from '../components/header.js';
import SideBar from '../components/sidebar.js';
import HomeView from '../components/homeView/homegrid.js'
import MyFeedView from '../components/myFeedView/myfeedgrid.js'

import {getListings} from '../store/listings.js';


function Main() {
  
  const [view, setView] = useState('home');

  function changeView(newView) {
    setView(newView);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('this is from main, useEffect');
    dispatch(getListings())
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