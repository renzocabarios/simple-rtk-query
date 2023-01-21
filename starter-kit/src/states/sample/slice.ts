import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import initialState from './state'

const slice = createSlice({
    name: "sample",
    initialState,
    reducers: {}
});

export const { } = slice.actions;

export default slice.reducer;