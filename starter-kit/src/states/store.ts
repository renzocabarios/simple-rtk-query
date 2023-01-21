import { configureStore } from "@reduxjs/toolkit";
import sample from '../states/sample/slice'

export const store = configureStore({
    reducer: { sample }
})