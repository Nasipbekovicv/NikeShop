import { createSlice } from "@reduxjs/toolkit";


const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        item: []
    },
    reducers: {
        commentsFunc: (state, action) => {
            state.item.push(action.payload)
        }
    }
})

export const { reducer: commentReaducer, actions } = commentsSlice