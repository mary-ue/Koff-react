import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import categoriesReducer from './categories/categories.slice';
import goodsReducer from './goods/goods.slice';
import favoriteReducer from './favorite/favorite.slice';
import { apiTokenErrorMiddleware } from './middleware';
import goodReducer from './good/good.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsReducer,
    good: goodReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
