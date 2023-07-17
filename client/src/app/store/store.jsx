import { configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query"
// import slices 
import authSlice from "../features/Auth";
import userDetails from "../features/userDetails";
import cartSlice  from "../features/Cart";


// import API services
import AuthApi from "../../services/Auth";
import resetPasswordApi from "../../services/Password";
import coursesApi from "../../services/Courses";


const store = configureStore ({

    reducer : {
        auth : authSlice,
        user : userDetails,
        cart : cartSlice,
        
        [AuthApi.reducerPath] : AuthApi.reducer,
        [resetPasswordApi.reducerPath] : resetPasswordApi.reducer,
        [coursesApi.reducerPath] : coursesApi.reducer
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware, resetPasswordApi.middleware, coursesApi.middleware])
})

setupListeners(store.dispatch);

export default store;