import { createSlice } from "@reduxjs/toolkit";
import Leggings from "./LeggingsData";


const leggingsSlice = createSlice({
    name: 'leggings',
    initialState: Leggings,
    reducers: {}
})

export const { reducer: LeggingsReducer } = leggingsSlice