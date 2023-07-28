import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
    reducerPath : "coursesApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // get enrolled courses (student)
        getEnrolledCourses : builder.query({
            query : () => ({
                url : "/profile/get-enrolled-courses",
                method : "GET",
                credentials : "include"
            })
        }),

        // create course (instructor only)
        createCourse : builder.mutation({
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
                method : "GET",
                params : {
                    courseID
                }
            })
        }),

        // (student only)
        updateCourseProgress : builder.mutation({
            query : (details) => ({
                url : "/course/update-course-progress",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(details),
                credentials : "include"
            })
        }),

        // course full detail
        fullCourseDetails : builder.query({
            query : ({courseId}) => ({
                url : `/course/full-course-details/${courseId}`,
                method : "GET",
                credentials : "include",
                params : {
                    courseId
                }
            })
        }),

        // edit course (instructor only)
        editCourse : builder.mutation({
            query : (updates) => ({
                url : "/course/editCourse",
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(updates),
                credentials : "include"
            })
        }),

        // instructor courses (instructor only)
        instructorCourse : builder.query({
            query : () => ({
                url : "/course/instructor-course",
                method : "GET",
                credentials : "include"
            })
        }),

        

    })  
})

export default coursesApi;
export const {useGetEnrolledCoursesQuery} = coursesApi;