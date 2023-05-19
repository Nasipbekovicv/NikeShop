import { createSlice } from "@reduxjs/toolkit";

const cardShopSlice = createSlice({
    name: 'cardShop',
    initialState: {
        CardItems: [],
    },
    reducers: {
        addToCard: (state, action) => {
            const newIdCount = {
                ...action.payload,
                count: 1,
            }
            const newId = state.CardItems.find(el => el.id === newIdCount.id);
            if (newId) {
                newId.count += 1
            } else {
                state.CardItems.push(newIdCount)
            }

        },
        increment: (state, action) => {
            state.CardItems = state.CardItems.map(el => {
                if (el.id === action.payload) {
                    return {...el, count: el.count -= 1 }
                }
                return el
            }).filter(e => e.count !== 0)

        },
        decrement: (state, action) => {
            state.CardItems = state.CardItems.map(el => {
                if (el.id === action.payload) {
                    return {...el, count: el.count += 1 }
                }
                return el
            })

        },

    }
})

export const { reducer: cardShopReducer, actions } = cardShopSlice