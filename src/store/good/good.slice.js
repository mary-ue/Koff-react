import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

export const fetchGood = createAsyncThunk(
  'good/fetchGood',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL}api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: 'Не удалось получить товар',
        });
      }

      throw new Error('Не удалось загрузить товар');
    }

    return response.json();
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGood.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGood.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default goodSlice.reducer;
