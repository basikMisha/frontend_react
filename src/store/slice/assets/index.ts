import { createSlice } from "@reduxjs/toolkit"
import { getFavAssets } from "../../thunks/assets";

const initialState:any = {
    assets: [],
    favoriteAssets: [],

};

export const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFavAssets.fulfilled, (state, action) => {
            state.favoriteAssets.push(action.payload)
        })
    }
});

export default assetsSlice.reducer;