import {configureStore} from '@reduxjs/toolkit';
import productSlice from '../Features/productSlice';
export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
