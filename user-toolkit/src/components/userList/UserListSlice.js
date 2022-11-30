import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersApis from '../../apis/userApis';

export const todoListSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    changeTodoStatus: (state, action) => {
      const currentState = state.users.find(
        (todo) => todo.id === action.payload
      );
      if (currentState) {
        currentState.completed = !currentState.completed;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

// Middleware functions
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await usersApis.getAll();
  const users = res.data;
  return users;
});

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (newTodo) => {
    const res = await usersApis.add(newUser);
    return res.data;
  }
);