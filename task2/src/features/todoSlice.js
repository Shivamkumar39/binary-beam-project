import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

const config = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (token, thunkAPI) => {
  try {
    const res = await axios.get(API_URL, config(token));
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const addTodo = createAsyncThunk('todos/addTodo', async ({ token, todo }, thunkAPI) => {
  try {
    const res = await axios.post(API_URL, todo, config(token));
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ token, id, updates }, thunkAPI) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updates, config(token));
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async ({ token, id }, thunkAPI) => {
  try {
    await axios.delete(`${API_URL}/${id}`, config(token));
    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => { state.loading = true; state.error = null; })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to load todos';
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })

      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(todo => todo._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })

      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo._id !== action.payload);
      });
  }
});

export default todoSlice.reducer;
