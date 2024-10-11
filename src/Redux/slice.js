import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"books",
    initialState:{
        books:[]
    },
    reducers:{
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook:(state,action)=>{
            state.books=state.books.filter(book=>book.id!==action.payload)
        },
        updateBook: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.books.findIndex((book) => book.id === id);
            if (index !== -1) {
              state.books[index] = { ...state.books[index], ...updatedData };
            }
          },
    }
})

export const {addBook,deleteBook,updateBook}=userSlice.actions
export default userSlice.reducer;