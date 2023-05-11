import { createSlice } from "@reduxjs/toolkit";
import shortsData from './ShortsMensData'

const ShortSlice = createSlice({
    name: 'shorts',
    initialState: shortsData,
    reducers: {}
})

export const { reducer: ShortsReduce } = ShortSlice