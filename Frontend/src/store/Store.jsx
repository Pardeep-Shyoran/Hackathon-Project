import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice';
import productSlice from '../features/Product/productSlice';
import cartSlice from '../features/Cart/cartSlice';

const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});

export default store;