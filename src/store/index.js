import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import listings from './listings.js';
import category from './category.js';

const reducers = combineReducers({
  listings,
  category,
});

const store = () => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default store();
