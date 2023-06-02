import { configureStore } from '@reduxjs/toolkit';
import { fetchUsers } from './users/operations';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
});

store.dispatch(fetchUsers());
