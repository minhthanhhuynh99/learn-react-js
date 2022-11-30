import { configureStore } from "@reduxjs/toolkit";
import { userListSlice } from '../components/userList/UserListSlice';


const store = configureStore({
    reducer: {
        userList: userListSlice.reducer
    }
})

export default store