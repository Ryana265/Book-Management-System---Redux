import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './slice'
export const store=configureStore({
    reducer:{
        books:bookReducer
        /// Using the name "books" to match your slice name
    }
})