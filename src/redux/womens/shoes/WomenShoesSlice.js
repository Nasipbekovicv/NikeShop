import { createSlice } from "@reduxjs/toolkit";
import womensShoes from "./WomensShoes";

const womenShoesSlice = createSlice({
    name: 'shoesWomen',
    initialState: womensShoes,
    reducers: {}
})

export const { reducer: womenShoesReducers } = womenShoesSlice