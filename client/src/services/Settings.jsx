import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const SettingsApi = createApi({
    reducerPath : "SettingsApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        deleteProfile : builder.mutation({
            query : () => ({
                url : '/profile/delete-profile',
                method : "DELETE",
                credentials : "include"
            })
        }),

        updateProfilePicture : builder.mutation({
            query : (displayPicture) => ({
                url : "/profile/update-avatar",
                method : "PUT",
                headers : {
                    "Content-Type": "multipart/form-data",
                },
                body : displayPicture,
                credentials : "include"
                
            })
        }),

        updateProfile : builder.mutation({
            query : (profileData) => ({
                url : "/profile/update-profile",
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(profileData),
                credentials : "include"
            })
        }),

        changePassword : builder.mutation({
            query : (passwordData) => ({
                url : "/auth/change-password",
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(passwordData),
                credentials : "include"
            })
        })

    })
})

export const {useDeleteProfileMutation, useUpdateProfilePictureMutation, useUpdateProfileMutation, useChangePasswordMutation} = SettingsApi;

export default SettingsApi;