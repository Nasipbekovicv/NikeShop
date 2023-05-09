import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { airmenHomeReducer } from './airmenHomeSlice'
import { shoesMenDataReducer } from './mens/mensShoes/ShoesSlice'
import { JacketVestsReducer } from './mens/JacketVests/JacketVestsSlice'
import { HoodiesSweatshirtsReducer } from './mens/HoodiesSweatshirts/HoodiesSweatshirtsSlice'
import { shoesMenDataFilterReducer } from './search/SearchSlice'
import { cardShopReducer } from './cardShop/CardShopSlice'
import { commentReaducer } from './comments/CommentsSlice'


const combineReducer = combineReducers({
    ahomeAirMens: airmenHomeReducer,
    // data
    mensShoes: shoesMenDataReducer,
    JacketVest: JacketVestsReducer,
    HoodiesSweatshirts: HoodiesSweatshirtsReducer,
    // search
    filterMansShoes: shoesMenDataFilterReducer,
    //  addToCard
    addToCard: cardShopReducer,
    // comments
    comments: commentReaducer,
})

const store = configureStore({
    reducer: combineReducer
})

export default store