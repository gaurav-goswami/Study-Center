import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null
}

export const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers : {
        setUserDetails : (state, action) => {
            // const {firstName, lastName, email, password, confirmPassword, accountType} = action.payload;
            // state.firstName = firstName;
            // state.lastName = lastName;
            // state.email = email;
            // state.password = password;
            // state.confirmPassword = confirmPassword;
            // state.accountType = accountType
            state.user = action.payload
        }
    }
})

export const {setUserDetails} = userSlice.actions;
export default userSlice.reducer;