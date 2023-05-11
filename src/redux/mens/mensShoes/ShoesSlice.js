import { createSlice } from '@reduxjs/toolkit'
import ShoesMensData from './ShoesData'

const shoesSlice = createSlice({
    name: 'shoesMen',
    initialState: ShoesMensData,
    reducers: {}
})

export const { reducer: shoesMenDataReducer } = shoesSlice