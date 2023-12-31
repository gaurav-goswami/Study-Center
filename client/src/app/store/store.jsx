import { configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query"
// import slices 
import authSlice from "../features/Auth";
import userDetails from "../features/userDetails";
import cartSlice  from "../features/Cart";
import buildCourse from "../features/buildCourse";
import courseStep from "../features/courseStep";


// import API services
import AuthApi from "../../services/Auth"
import resetPasswordApi from "../../services/Password";
import coursesApi from "../../services/Courses";
import SettingsApi from "../../services/Settings";
import ratingAndReviewApi from "../../services/RatingAndReview";


const store = configureStore ({

    reducer : {
        auth : authSlice,
        user : userDetails,
        cart : cartSlice,
        buildCourse,
        courseStep,
        
        [AuthApi.reducerPath] : AuthApi.reducer,
        [resetPasswordApi.reducerPath] : resetPasswordApi.reducer,
        [coursesApi.reducerPath] : coursesApi.reducer,
        [SettingsApi.reducerPath] : SettingsApi.reducer,
        [ratingAndReviewApi.reducerPath] : ratingAndReviewApi.reducer
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware, resetPasswordApi.middleware, coursesApi.middleware, SettingsApi.middleware, ratingAndReviewApi.middleware])
})

setupListeners(store.dispatch);

export default store;