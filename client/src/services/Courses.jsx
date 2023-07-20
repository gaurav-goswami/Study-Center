import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
    reducerPath : "coursesApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // get enrolled courses (student)
        getEnrolledCourses : builder.query({
            query : ({token}) => ({
                url : "/profile/get-enrolled-courses",
                method : "GET",
                headers : {
                    "Authorization" : `Bearer ${token}`
                },
                credentials : "include"
            })
        }),

        // create course (instructor only)
        createCourse : builder.query({
            query : (courseDetails) => ({
                url : "/course/create-course",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(courseDetails),
                credentials : "include"
            })
        }),

        // get all courses
        getAllCourses : builder.query({
            query : () => ({
                url : "/course/all-course",
                method : "GET"
            })
        }),

        // get course details 
        getCourseDetails : builder.query({
            query : ({courseID}) => ({
                url : `/course/get-course-details/${courseID}`,
                method : "GET"
            })
        }),

    })  
})

export default coursesApi;
export const {useGetEnrolledCoursesQuery} = coursesApi;