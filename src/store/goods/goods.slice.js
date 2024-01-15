import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch('https://koff-api.vercel.app/api/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Не удалось получить каталог');
    }

    return response.json();
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
