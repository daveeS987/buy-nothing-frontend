import axios from 'axios';

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
    url: 'http://localhost:5000/api/v1/listings'
  });

  dispatch({
    type: 'GETLISTINGS',
    payload: listings.data.results
  })
}


export const addListing = (payload) => async dispatch => {

  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/v1/listings',
    data: payload
  })

  dispatch(getListings());
}





















// export const decrementStock = (payload) => async dispatch => {

//   payload.inStock = payload.inStock-=1;

//   await axios({
//     method: 'PUT',
//     url: `https://davee-auth-api-server.herokuapp.com/api/v1/products/${payload._id}`,
//     data: payload
//   })

//   dispatch(getProducts());
// }

// export const putStockBack = (payload) => async dispatch => {

//   let amount = payload.count;
//   let newObj = payload.obj;
//   newObj.inStock = newObj.inStock+amount;

//   await axios({
//     method: 'PUT',
//     url: `https://davee-auth-api-server.herokuapp.com/api/v1/products/${newObj._id}`,
//     data: newObj
//   })
  
//   dispatch(getProducts());
// }