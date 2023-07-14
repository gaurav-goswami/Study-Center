import { configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query"
// import slices 
import authSlice from "../features/Auth";
import userDetails from "../features/userDetails";

// import API services
import AuthApi from "../../services/Auth";


const store = configureStore ({

    reducer : {
        auth : authSlice,
        user : userDetails,
        
        [AuthApi.reducerPath] : AuthApi.reducer
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware])
})

setupListeners(store.dispatch);

export default store;