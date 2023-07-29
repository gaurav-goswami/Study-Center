import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const ratingAndReviewApi = createApi({
    reducerPath : "ratingAndReviewApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // create rating (student);
        createRating : builder.mutation({
            query : (ratingDetails) => ({
                url : "/course/create-rating",
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(ratingDetails),
                credentials : "include"
            })
        }),

        // get average rating
        avgRating : builder.query({
            query : (courseId) => ({
                url : `/course/get-average-rating/${courseId}`,
                method : "GET",
                params : {
                    courseId
                }
            })
        }),

        // get all reviews
        reviews : builder.query({
            query : () => ({
                url : "/course/get-reviews",
                method : "GET",
            })
        }),

        // get course specific rating and reviews
        courseReviews : builder.query({
            query : (courseId) => ({
                url : `/course/get-reviews/${courseId}`,
                method : "GET",
                params : {
                    courseId
                }
            })
        })

    })
})

export default ratingAndReviewApi;
export const {useCreateRatingMutation, useAvgRatingQuery, useReviewsQuery, useCourseReviewsQuery} = ratingAndReviewApi;