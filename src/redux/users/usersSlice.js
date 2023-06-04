import { createSlice } from '@reduxjs/toolkit';
import { fetchFilteredUsers, fetchUsers, LIMIT, updateUser } from './operations';

export const usersSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isFullyLoaded: false,
    isFollowedFilter: undefined,
    page: 1,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isFullyLoaded = action.payload.items.length < LIMIT;
        state.items = [...state.items, ...action.payload.items];
        state.page = action.payload.page;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredUsers.fulfilled, (state, action) => {
        state.isFollowedFilter = action.payload.isFollowed;
        state.page = action.payload.page;
        state.isFullyLoaded = false;
        state.items = action.payload.items;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const userIndex = state.items.findIndex((user) => user.id === action.payload.id);
        const newItems = [...state.items];
        newItems.splice(userIndex, 1, action.payload);
        state.items = newItems;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
