import { createSlice } from '@reduxjs/toolkit'
import ShoesMensData from '../mens/mensShoes/ShoesData'
import MensJacketVestsData from '../mens/JacketVests/JacketVestsData'
import MensHoodiesSweatshirts from '../mens/HoodiesSweatshirts/HoodiesSweatshirtsData'

const shoesSlice = createSlice({
    name: 'shoesMen',
    initialState: {
        item1: [...ShoesMensData, ...MensJacketVestsData, ...MensHoodiesSweatshirts],
        item2: []
    },
    reducers: {
        searchProducts: (state, action) => {
            let { item1 } = state
            state.item2 = item1.filter(data => data.name.toLowerCase().includes(action.payload) || data.title.toLowerCase().includes(action.payload))
        },
        clearItem2(state) {
            state.item2 = []
        }
    }
})

export const { reducer: shoesMenDataFilterReducer, actions } = shoesSlice