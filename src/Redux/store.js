import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
const store = configureStore({
    //   init rootReducer
    reducer
});

export default store;
