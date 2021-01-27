import axios from 'axios';

let API = process.env.REACT_APP_API;

console.log('----------------------------------------------------')
console.log('This is the current Backened API:', API);
console.log('If you are developing locally it should be localhost:5000, not heroku');
console.log('Check your REACT APP .env file')

const intialState = [];

export default function reducer( state = intialState, action) {
  const {type, payload} = action;

  switch(type) {

    case "GETLISTINGS":
      return payload;

    default:
      return state;
  }
}


export const getListings = () => async dispatch => {
  
  let listings = await axios({
    method: 'GET',
    url: `${API}/api/v1/listings`
  });

  dispatch({
    type: 'GETLISTINGS',
    payload: listings.data.results
  })
}


export const addListing = (payload) => async dispatch => {

  await axios({
    method: 'POST',
    url: `${API}/api/v1/listings`,
    data: payload
  })

  dispatch(getListings());
}


export const addComment = (payload) => async dispatch => {

  await axios({
    method: 'PUT',
    url: `${API}/api/v1/listings/${payload.listingId}`,
    data: payload.newListing
  })

  dispatch(getListings());
}

