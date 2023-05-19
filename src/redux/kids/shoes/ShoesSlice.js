import { createSlice } from "@reduxjs/toolkit";
import shoesKids from "./ShoesKidsData";


const shoesKidsSlice = createSlice({
    name: 'shoesKids',
    initialState: shoesKids,
    reducers: {}
})

export const { reducer: shoesKidsReducer } = shoesKidsSlice