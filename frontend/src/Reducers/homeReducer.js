import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../Utils/axios';
import objectToParams from '../Utils/objectToParams';

export const fetchOpenWeatherData = createAsyncThunk(
    'data/fetchOpenWeatherData',
    async (params, thunkAPI) => {
        const { data } = await axios.get(`/weather${objectToParams(params)}`);

        localStorage.setItem('data', JSON.stringify(data));

        return data;
    }
);

export const fetchOWForeCast = createAsyncThunk(
    'data/fetchOWForeCast',
    async (params, thunkAPI) => {
        const { data } = await axios.get(`/onecall${objectToParams(params)}`);

        localStorage.setItem('forecast', JSON.stringify(data));

        return data;
    }
);

const weatherSlice = createSlice({
    name: 'data',
    initialState: {
        data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {},
        forecast: localStorage.getItem('forecast')
            ? JSON.parse(localStorage.getItem('forecast'))
            : {}
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
        },
        [fetchOWForeCast.pending]: (state) => {
            state.foreCastLoading = true;
        },
        [fetchOWForeCast.fulfilled]: (state, action) => {
            state.foreCastLoading = false;
            state.forecast = action.payload;
        },
        [fetchOWForeCast.rejected]: (state, action) => {
            state.foreCastLoading = false;
            state.error = action.payload;
        }
    }
});

const { reducer: homeReducer } = weatherSlice;

// export const {} = weatherSlice.actions;

export default homeReducer;
