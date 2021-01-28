const intialState = null;

export default function reducer( state = intialState, action) {
  const {type, payload} = action;

  switch(type) {

    case "CHANGECATEGORY":
      return payload;

    default:
      return state;
  }
}


export const changeCategory = (newCategory) => {
  console.log('Change category got triggered in actions:', newCategory);
  return {
    type: 'CHANGECATEGORY',
    payload: newCategory
  }
}






