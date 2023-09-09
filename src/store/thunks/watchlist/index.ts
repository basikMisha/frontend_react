import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceAuth } from '../../../utils/axios';

export const getWatchlist = createAsyncThunk(
    'watchlist/get-elements',
    async (_, { rejectWithValue }) => {
        try {
            const watchlist = await instanceAuth.get('watchlist/get-elements');
            return watchlist.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)