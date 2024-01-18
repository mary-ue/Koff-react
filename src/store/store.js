import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import categoriesReducer from './categories/categories.slice';
import goodsSlice from './goods/goods.slice';
import { apiTokenErrorMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
