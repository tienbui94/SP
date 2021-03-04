import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '../Reducers/homeReducer';
const rootReducer = combineReducers({
    // init reducer
    home: homeReducer
});

export default rootReducer;
