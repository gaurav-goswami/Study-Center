import { configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query"
// import slices 
import authSlice from "../features/Auth";
import userDetails from "../features/userDetails";

// import API services
import AuthApi from "../../services/Auth";
import resetPasswordApi from "../../services/Password";


const store = configureStore ({

    reducer : {
        auth : authSlice,
        user : userDetails,
        
        [AuthApi.reducerPath] : AuthApi.reducer,
        [resetPasswordApi.reducerPath] : resetPasswordApi.reducer,
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware, resetPasswordApi.middleware])
})

setupListeners(store.dispatch);

export default store;