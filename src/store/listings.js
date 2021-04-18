import axios from 'axios';

const API = process.env.REACT_APP_API;

const intialState = [];

export default function reducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GETLISTINGS':
      return payload;

    default:
      return state;
  }
}

export const getListings = () => async (dispatch) => {
  let listings = await axios({
    method: 'GET',
    url: `${API}/api/v1/listings`,
  });

  dispatch({
    type: 'GETLISTINGS',
    payload: listings.data.results,
  });
};

export const addListing = (payload) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${API}/api/v1/listings`,
    data: payload,
  });

  dispatch(getListings());
};

export const addComment = (payload) => async (dispatch) => {
  await axios({
    method: 'PUT',
    url: `${API}/api/v1/listings/${payload.listingId}`,
    data: payload.newListing,
  });

  dispatch(getListings());
};
