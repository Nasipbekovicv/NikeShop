import { createSlice } from "@reduxjs/toolkit";

import socks from "./SocksData";

const socksSclice = createSlice({
    name: 'socks',
    initialState: socks,
    reducers: {}
})

export const { reducer: socksReducers } = socksSclice