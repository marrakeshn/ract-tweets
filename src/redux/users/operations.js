import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://646fdeaf3de51400f723b07b.mockapi.io';
export const LIMIT = 3;

const searchParams = new URLSearchParams({
  limit: LIMIT,
});

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ page = 1 }, thunkAPI) => {
    searchParams.set('page', page);

    try {
      const response = await axios.get(`/users?${searchParams}`);
      if (!response) {
        Notify.failure('Oops, something went wrong');
      }
      return { items: response.data, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchFilteredUsers = createAsyncThunk(
  'users/fetchFilteredUsers',
  async ({ page, isFollowed }, thunkAPI) => {
    searchParams.set('page', page);
    searchParams.set('isFollowed', isFollowed);

    if (isFollowed === undefined) {
      searchParams.delete('isFollowed');
    }

    try {
      const response = await axios.get(`/users?${searchParams}`);
      if (!response) {
        Notify.failure('Oops, something went wrong');
      }
      return { items: response.data, isFollowed, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, followers, isFollowed }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, { followers, isFollowed });
      if (!response) {
        Notify.failure('Oops, something went wrong');
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
