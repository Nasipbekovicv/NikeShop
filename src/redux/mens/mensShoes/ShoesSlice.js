import { createSlice } from '@reduxjs/toolkit'
import ShoesMensData from './ShoesData'

const shoesSlice = createSlice({
    name: 'shoesMen',
    initialState: ShoesMensData,
    reducers: {
        // searchProducts: (state, action) => {
        //     state.ShoesMensData.filter(data => {
        //             return (
        //                 data.name.toLowerCase().includes(action.payload.toLowerCase())
        //             )
        //         })
        //         // return {
        //         //     ...state,
        //         //     Filter: action.payload.length > 0 ? Filter : [...state.ShoesMensData]
        //         // }
        // }
    }
})

export const { reducer: shoesMenDataReducer } = shoesSlice