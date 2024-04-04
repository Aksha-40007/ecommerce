import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authUserReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import feedbackReducer from './slices/feedbackSlice';

const rootReducer = combineReducers({
  currentAuthUser: authUserReducer,
  products: productReducer,
  cart:cartReducer,
  order:orderReducer,
  feedback:feedbackReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
