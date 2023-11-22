import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_SERVER_URL,
  }),
  endpoints: (builder) => ({
    // get enrolled courses (student)
    getEnrolledCourses: builder.query({
      query: () => ({
        url: "/profile/get-enrolled-courses",
        method: "GET",
        credentials: "include",
      }),
    }),

    // create course (instructor only)
    createCourse: builder.mutation({
      query: (courseDetails) => ({
        url: "/course/create-course",
        method: "POST",
        body: courseDetails,
        credentials: "include",
      }),
    }),

    // get all courses
    getAllCourses: builder.query({
      query: () => ({
        url: "/course/all-course",
        method: "GET",
      }),
    }),

    // get course details
    getCourseDetails: builder.query({
      query: ({ courseID }) => ({
        url: `/course/get-course-details/${courseID}`,
        method: "GET",
        params: {
          courseID,
        },
      }),
    }),

    // (student only)
    updateCourseProgress: builder.mutation({
      query: (details) => ({
        url: "/course/update-course-progress",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
        credentials: "include",
      }),
    }),

    // course full detail
    fullCourseDetails: builder.query({
      query: ({ courseId }) => ({
        url: `/course/full-course-details/${courseId}`,
        method: "GET",
        credentials: "include",
        params: {
          courseId,
        },
      }),
    }),

    // edit course (instructor only)
    editCourse: builder.mutation({
      query: (updates) => ({
        url: "/course/editCourse",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
        credentials: "include",
      }),
    }),

    // instructor courses (instructor)
    instructorCourse: builder.query({
      query: () => ({
        url: "/course/instructor-course",
        method: "GET",
        credentials: "include",
      }),
    }),

    // delete course (instructor)
    deleteCourse: builder.mutation({
      query: (courseId) => ({
        url: "/course/delete-course",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseId),
        credentials: "include",
      }),
    }),

    // Add section (instructor)
    addSection: builder.mutation({
      query: (courseDetails) => ({
        url: "/course/add-section",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseDetails),
        credentials: "include",
      }),
    }),

    // update section (instructor)
    updateSection: builder.mutation({
      query: (updateDetails) => ({
        url: "/course/update-section",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDetails),
        credentials: "include",
      }),
    }),

    // delete section (instructor)
    deleteSection: builder.mutation({
      query: ({ courseId, sectionId }) => ({
        url: `/course/delete-section/${sectionId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          sectionId,
        },
        body: JSON.stringify(courseId),
        credentials: "include",
      }),
    }),

    // add sub-section
    addSubSection: builder.mutation({
      query: (subSectionDetails) => ({
        url: "/course/add-sub-section",
        method: "POST",
        body: subSectionDetails,
        credentials: "include",
      }),
    }),

    // update sub-section
    updateSubSection: builder.mutation({
      query: (updateDetails) => ({
        url: "/course/update-sub-section",
        method: "PUT",
        body: updateDetails,
        credentials: "include",
      }),
    }),

    // delete sub-section
    deleteSubSection: builder.mutation({
      query: ({ sectionId, subSectionId }) => ({
        url: `/course/delete-sub-section/${subSectionId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          subSectionId,
        },
        body: JSON.stringify(sectionId),
        credentials: "include",
      }),
    }),
  }),
});

export default coursesApi;
export const {
  useGetEnrolledCoursesQuery,
  useCreateCourseMutation,
  useGetAllCoursesQuery,
  useGetCourseDetailsQuery,
  useUpdateCourseProgressMutation,
  useFullCourseDetailsQuery,
  useEditCourseMutation,
  useInstructorCourseQuery,
  useDeleteCourseMutation,
  useAddSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
  useAddSubSectionMutation,
  useUpdateSubSectionMutation,
  useDeleteSubSectionMutation,
} = coursesApi;
