import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser } from './operations';

export const usersSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null, followedUsersId: [] },
  reducers: {
    setFollowedUser: (state, action) => {
      const followedIndex = state.followedUsersId.indexOf(action.payload);
      const newFollowedIds = followedIndex !== -1 ? [...state.followedUsersId].splice(followedIndex, 1) : [...state.followedUsersId, action.payload]
      state.followedUsersId = newFollowedIds;
    },
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
      .addCase(updateUser.pending, () => {
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
      })
  },
});
