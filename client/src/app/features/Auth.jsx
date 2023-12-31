import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null; 

export const authSlice = createSlice({
    name : "authSlice",
    initialState : {
        token,
        userRole : localStorage.getItem("user") ? localStorage.getItem("user") : null,
        loading : false,
        userDetails : localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")) : null
    },

    reducers : {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUserRole : (state, action) => {
            state.userRole = action.payload
        },
        setLoading : (state, action) => {
            state.loading = action.payload
        },
        setUserDetails : (state , action) => {
            state.userDetails = action.payload
        }
    }
})

export const {setToken, setUserRole, setLoading, setUserDetails} = authSlice.actions;

export default authSlice.reducer;