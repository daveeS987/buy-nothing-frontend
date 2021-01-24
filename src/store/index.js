import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import listings from './listings.js';

const reducers = combineReducers({
  listings
});

const store = () => {
  return createStore( reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)) );
}


export default store();