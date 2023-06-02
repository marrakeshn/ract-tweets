import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

export const usersSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    contacts: (state, action) => [...state, action.payload],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});
