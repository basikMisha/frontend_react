import {createSlice} from '@reduxjs/toolkit';
import { getWatchlist } from '../../thunks/watchlist';

const initialState: any = {
    watchlist: [],
}

export const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchlist.fulfilled, (state, action) => {
            state.watchlist = action.payload
        })
    }
})

export default watchlistSlice.reducer