import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { airmenHomeReducer } from './airmenHomeSlice'
import { shoesMenDataReducer } from './mens/mensShoes/ShoesSlice'
import { JacketVestsReducer } from './mens/JacketVests/JacketVestsSlice'
import { HoodiesSweatshirtsReducer } from './mens/HoodiesSweatshirts/HoodiesSweatshirtsSlice'

const combineReducer = combineReducers({
    ahomeAirMens: airmenHomeReducer,
    mensShoes: shoesMenDataReducer,
    JacketVest: JacketVestsReducer,
    HoodiesSweatshirts: HoodiesSweatshirtsReducer,
})

const store = configureStore({
    reducer: combineReducer
})

export default store