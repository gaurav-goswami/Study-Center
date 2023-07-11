import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : "",
    accountType : ""
}

export const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers : {
        setUserDetails : (state, action) => {
            const {firstName, lastName, email, password, confirmPassword, accountType} = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.password = password;
            state.confirmPassword = confirmPassword;
            state.accountType = accountType
        }
    }
})

export const {setUserDetails} = userSlice.actions;
export default userSlice.reducer;