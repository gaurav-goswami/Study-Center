import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
    reducerPath : "coursesApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // get enrolled courses
        getEnrolledCourses : builder.query({
            query : ({token}) => ({
                url : "/profile/get-enrolled-courses",
                method : "GET",
                headers : {
                    "Authorization" : `Bearer ${token}`
                },
                credentials : "include"
            })
        })

    })  
})

export default coursesApi;
export const {useGetEnrolledCoursesQuery} = coursesApi;