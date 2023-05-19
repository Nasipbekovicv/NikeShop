import { createSlice } from '@reduxjs/toolkit'
import ShoesMensData from '../mens/mensShoes/ShoesData'
import MensJacketVestsData from '../mens/JacketVests/JacketVestsData'
import MensHoodiesSweatshirts from '../mens/HoodiesSweatshirts/HoodiesSweatshirtsData'
import socks from '../mens/socks/SocksData'
import shorts from '../mens/shorts/ShortsMensData'
import Leggings from '../womens/leggings/LeggingsData'
import womensShoes from '../womens/shoes/WomensShoes'
import SkirtsDresses from '../womens/SkirtsDresses/SkirtsDressesData'
import shoesKids from '../kids/shoes/ShoesKidsData'

const shoesSlice = createSlice({
    name: 'shoesMen',
    initialState: {
        item1: [...ShoesMensData, ...MensJacketVestsData, ...MensHoodiesSweatshirts, ...socks, ...shorts, ...Leggings, ...womensShoes, ...SkirtsDresses, ...shoesKids],
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