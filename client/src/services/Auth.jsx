import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const AuthApi = createApi({
    reducerPath : "authApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // send otp
        sendOtp : builder.mutation({
            query : (email) => ({
                url : "/auth/send-otp",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(email)
            })
        }),

        // signUp
        signUp : builder.mutation({
            query : (signUpDetails) => ({
                url : "/auth/signup",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(signUpDetails)
            })
        }),

        // login
        login : builder.mutation({
            query : (loginDetails) => ({
                url : "/auth/login",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(loginDetails),
                credentials : "include"
            })
        })

    })
})

export default AuthApi
export const {useSendOtpMutation, useSignUpMutation, useLoginMutation} = AuthApi