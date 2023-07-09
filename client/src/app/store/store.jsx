import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query"
import {AuthSlice} from "../features/Auth";

const store = configureStore ({

    reducer : {
        auth : AuthSlice.reducer,
    },


})

setupListeners(store.dispatch);

export default store;