import { createSlice } from "@reduxjs/toolkit";

const cardShopSlice = createSlice({
    name: 'cardShop',
    initialState: {
        CardItems: []
    },
    reducers: {
        addToCard: (state, action) => {
            state.CardItems.push(action.payload)
        }
    }
})

export const { reducer: cardShopReducer, actions } = cardShopSlice