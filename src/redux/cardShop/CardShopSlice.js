import { createSlice } from "@reduxjs/toolkit";

const cardShopSlice = createSlice({
    name: 'cardShop',
    initialState: {
        CardItems: [],
        cntMin: 0,
    },
    reducers: {
        addToCard: (state, action) => {
            const newIdCount = {
                ...action.payload,
                count: 1,
                // countMin: -1,
                // countPus: +1,
            }
            const countMin = 1
            const newId = state.CardItems.find(el => el.id === newIdCount.id);
            if (newId) {
                newId.count += 1
            } else {
                state.CardItems.push(newIdCount)
            }
        },
        minCut: (state, action) => {

        }

    }
})

export const { reducer: cardShopReducer, actions } = cardShopSlice