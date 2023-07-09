import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null; 

export const AuthSlice = createSlice({
    name : "authSlice",
    initialState : {
        token,
    },

    reducers : {
        setToken(state, action){
            state.token = action.payload
        }
    }
})

const {setToken} = AuthSlice.actions;
export default AuthSlice.reducer;