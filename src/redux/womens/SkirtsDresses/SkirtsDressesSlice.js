import { createSlice } from "@reduxjs/toolkit";
import SkirtsDresses from "./SkirtsDressesData";


const SkirtsDressesSlice = createSlice({
    name: 'SkirtsDresses',
    initialState: SkirtsDresses,
    reducers: {}
})

export const { reducer: SkirtsDressesReducer } = SkirtsDressesSlice