import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import shelf from './shelfReducer';
import counter from './counterReducer';
const store = combineReducers({
  user,
  login,
  shelf,
  counter,
});

export default store;
