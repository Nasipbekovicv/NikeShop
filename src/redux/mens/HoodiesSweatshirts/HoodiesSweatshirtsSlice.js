import { createSlice } from '@reduxjs/toolkit'

import HoodiesSweatshirts from './HoodiesSweatshirtsData'

const HoodiesSweatshirtsSlice = createSlice({
    name: 'HoodiesSweatshirtsName',
    initialState: HoodiesSweatshirts,
    reducers: {}
})

export const { reducer: HoodiesSweatshirtsReducer } = HoodiesSweatshirtsSlice