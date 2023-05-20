import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { airmenHomeReducer } from './airmenHomeSlice'
import { shoesMenDataReducer } from './mens/mensShoes/ShoesSlice'
import { JacketVestsReducer } from './mens/JacketVests/JacketVestsSlice'
import { HoodiesSweatshirtsReducer } from './mens/HoodiesSweatshirts/HoodiesSweatshirtsSlice'
import { shoesMenDataFilterReducer } from './search/SearchSlice'
import { cardShopReducer } from './cardShop/CardShopSlice'
import { ShortsReduce } from './mens/shorts/ShortsSlice'
import { socksReducers } from './mens/socks/SocksSlice'
import { womenShoesReducers } from './womens/shoes/WomenShoesSlice'
import { SkirtsDressesReducer } from './womens/SkirtsDresses/SkirtsDressesSlice'
import { LeggingsReducer } from './womens/leggings/LeggingsSlice'
import { shoesKidsReducer } from './kids/shoes/ShoesSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: hardSet,
    blacklist: ['somethingTemporary']
}


const onRehydrate = () => {
    store.dispatch({ type: 'SOME_ACTION' });
};


const combineReducer = combineReducers({
    ahomeAirMens: airmenHomeReducer,
    // data
    mensShoes: shoesMenDataReducer,
    JacketVest: JacketVestsReducer,
    HoodiesSweatshirts: HoodiesSweatshirtsReducer,
    shorts: ShortsReduce,
    socks: socksReducers,
    // womensData
    womensShoes: womenShoesReducers,
    SkirtsDresses: SkirtsDressesReducer,
    Leggings: LeggingsReducer,
    // Kids
    shoesKids: shoesKidsReducer,
    // search
    filterMansShoes: shoesMenDataFilterReducer,
    //  addToCard
    addToCard: cardShopReducer,
})

const persistedReducer = persistReducer(persistConfig, combineReducer, onRehydrate)

const store = configureStore({
    reducer: persistedReducer

})



export default store