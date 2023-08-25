import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {baseUrl} from '../../Constant/Base_url';

export const showProduct = createAsyncThunk(
  'showProduct',
  async rejectWithValue => {
    const reponse = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '101f3c79fdmsh300e77cd7c060ffp1a819cjsnf31a7c0db8d6',
        'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com',
      },
    });
    try {
      const result = await reponse.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: null,
    loding: false,
    error: null,
  },
  extraReducers: {
    [showProduct.pending]: state => {
      state.loding = true;
    },
    [showProduct.fulfilled]: (state, action) => {
      state.loding = false;
      state.user = action.payload;
    },
    [showProduct.rejected]: (state, action) => {
      state.loding = false;
      state.user = action.payload.message;
    },
  },
});

export default productSlice.reducer;
