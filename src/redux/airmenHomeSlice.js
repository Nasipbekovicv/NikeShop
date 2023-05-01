import { createSlice } from '@reduxjs/toolkit'
import airmenHomeData from './airmenback'

const airmenSlice = createSlice({
   name: 'airmenHome' ,
   initialState: airmenHomeData,
   reducers: {},
})

export const {reducer: airmenHomeReducer} = airmenSlice