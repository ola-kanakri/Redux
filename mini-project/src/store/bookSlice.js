/* eslint-disable no-unused-vars */
import {craeteSlice, createSlice} from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: "book",
    initialState: {books: null},
    reducers: {},
});

export default bookSlice.reducer;