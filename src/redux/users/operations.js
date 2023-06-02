import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://646fdeaf3de51400f723b07b.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      if (!response) {
        Notiflix.Notify('Oops, something went wrong');
      }
      return await response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);