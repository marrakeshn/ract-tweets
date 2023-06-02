import { combineReducers } from 'redux';
import { usersSlice } from './users/usersSlice';

export const reducer = combineReducers({
  users: usersSlice.reducer,
});
