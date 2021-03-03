import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../Utils/axios';
import objectToParams from '../Utils/objectToParams';

// import axios from 'axios';
export const fetchOpenWeatherData = createAsyncThunk(
    'data/fetchOpenWeatherData',
    async (params, thunkAPI) => {
        const { data } = await axios.get(`/weather${objectToParams(params)}`);
        localStorage.setItem('data', JSON.stringify(data));
        return data;
    }
);

// export const searchWeatherLocation = createAsyncThunk(
//     'data/searchWeatherLocation',
//     async (params, thunkAPI) => {
//         const { data } = await axios.get(`/weather${objectToParams(params)}`);
//         localStorage.setItem('data', JSON.stringify(data));
//         return data;
//     }
// );

const weatherSlice = createSlice({
    name: 'data',
    initialState: {
        data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {}
    },
    reducers: {
        // init reducers
    },
    extraReducers: {
        [fetchOpenWeatherData.pending]: (state) => {
            state.loading = true;
        },
        [fetchOpenWeatherData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [fetchOpenWeatherData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        // [searchWeatherLocation.pending]: (state) => {
        //     state.loading = true;
        // },
        // [searchWeatherLocation.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.data = action.payload;
        // },
        // [searchWeatherLocation.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // }
    }
});

const { reducer: dataReducer } = weatherSlice;

// export const {} = weatherSlice.actions;

export default dataReducer;
