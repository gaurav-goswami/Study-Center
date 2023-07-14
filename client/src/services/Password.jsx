import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const resetPasswordApi = createApi({
    reducerPath : "resetPasswordApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // send reset password token
        sendResetPasswordToken : builder.mutation({
            query : (email) => ({
                url : "/auth/reset-password-token",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(email)
            })
        }),

        resetPassword : builder.mutation({
            query : (resetPasswordDetails) => ({
                url : "/auth/reset-password",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(resetPasswordDetails)
            })
        })

    })
})

export default resetPasswordApi;
export const {useSendResetPasswordTokenMutation, useResetPasswordMutation} = resetPasswordApi