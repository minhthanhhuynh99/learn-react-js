import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApis from '../apis/UserApis';
export const usersSlice = createSlice({
    name: "users",
    initialState: {
        items: []
    },
    // reducers:{
    //     addUser: function(state, action) {
    //         state.items.push(action.payload)
    //         // state.users.push()
    //     },
    //     deleteUser: function(state,action) {
    //         state.items = state.items.filter(item => item.id != action.payload)
    //     } 
    // }
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
          state.items = action.payload;
        });
        builder.addCase(addNewUser.fulfilled, (state, action) => {
          state.items.push(action.payload);
        });
      },
})
export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
    const res = await userApis.getAll();
    const users = res.data;
    return users;
  });
  
  export const addNewUser = createAsyncThunk(
    'users/addNewUser',
    async (newUser) => {
      const res = await userApis.add(newUser);
      return res.data;
    }
  );

export const { addUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer