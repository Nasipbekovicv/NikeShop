import { createSlice } from '@reduxjs/toolkit'
import JacketVestsData from './JacketVestsData'

const JacketVestsSlice = createSlice({
    name: 'JacketVests',
    initialState: JacketVestsData,
    reducers: {}
})

export const { reducer: JacketVestsReducer } = JacketVestsSlice