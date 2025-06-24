import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/user/userSlice'


export const store = configureStore({
    reducer:{
        product : productReducer,
    }
})