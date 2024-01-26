import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from '../../const.js';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async(_, { getState, rejectWithValue}) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart`, {
        headers: {
          Authorization: `Bearer ${token},`
        }
      })

      if (!response.ok) {
        throw new Error('Не удалось загрузить содержимое корзины');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async(productData, { getState, rejectWithValue}) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token},`
        },
        body: JSON.stringify(productData)
      })

      if (!response.ok) {
        throw new Error('Не удалось добавить товар в корзину');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  products: [], 
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false, // для получения корзины
  loadingAdd: false, // для добавления товаров в корзину
  loadingUpdate: false, // обновлять количество товаров в корзине
  loadingRemove: false, // удалять
  error: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase()
  }
})

export default cartSlice.reducer;