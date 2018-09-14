
const counter = (state = [], action )=>{
    switch (action.type){
      case 'GET_COUNT':
      return action.payload;
    }
    return state;
  }

  export default counter;