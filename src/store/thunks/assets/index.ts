import {createAsyncThunk} from '@reduxjs/toolkit';
import { coinGeckoAPI } from '../../../utils/axios';

export const getFavAssets = createAsyncThunk(
    'coins/markets',
    async (data: string, {rejectWithValue}) => {
        try {
          const assets = await coinGeckoAPI.get(`/coins/${data}/market_chart?vs_currency=usd&days=90`);
          return {
            name: data,
            data: assets.data,
          }
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)