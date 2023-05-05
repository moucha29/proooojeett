import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './UserSlice'
import CarReducer from './CarSlice'

export const Store = configureStore({
    reducer:{
        AuthReducer,
        CarReducer
    }
})