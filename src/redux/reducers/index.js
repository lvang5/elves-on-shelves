import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import shelf from './shelfReducer';
import add from './addReducer';

const store = combineReducers({
  user,
  login,
  shelf,
  add,
});

export default store;
