import { combineReducers } from 'redux';

const addReducer = (state = [], action) => {
    // switch(action.type) {
    //   case 'ADD_ELF':
    //   return action.payload;
    //   default:
    //   return state;
    // }
    if(action.type === 'ADD_ELF'){
        return action.payload;
    }
    return state;
  }

  export default combineReducers({
    addReducer,
  });