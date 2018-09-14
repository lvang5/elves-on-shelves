const shelfReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_SHELF':
      return action.payload;
    default:
      return state;
  }
};

const counter = (state = [], action )=>{
  switch (action.type){
    case 'GET_COUNT':
    return [...state,action.payload];
  }
  return state;
}
export default shelfReducer;