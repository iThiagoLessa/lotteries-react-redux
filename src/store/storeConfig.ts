import { configureStore } from '@reduxjs/toolkit';

import lotterieReducer from "./Reducers";

const store = configureStore({
    reducer: {
        lotterySelected: lotterieReducer,
    },
});


export default store;

