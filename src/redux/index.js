import {  configureStore ,combineReducers } from '@reduxjs/toolkit'
import { airmenHomeReducer } from './airmenHomeSlice'

const combineReducer = combineReducers({
   ahomeAirMens: airmenHomeReducer,
})

const store = configureStore({
   reducer: combineReducer
})

export default store