import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    courseSectionData : [],
    courseEntireData : [],
    completedLectures : [],
    totalLectures : []
}

export const buildCourseSlice = createSlice({
    name : "buildCourseSlice",
    initialState,
    reducers : {
        setCourseSectionData : (state, action) => {
            state.courseSectionData = action.payload
        },

        setEntireCouseData : (state, action) => {
            state.courseEntireData = action.payload
        },

        setTotalNumberOfLectures : (state, action) => {
            state.completedLectures = action.payload
        },

        setCompletedLectures : (state, action) => {
            state.completedLectures = action.payload
        },

        updateCompletedLectures : (state, action) => {
            state.completedLectures = [...state.completedLectures , action.payload]
        }
    }
})

export const {setCourseSectionData, setEntireCouseData, setTotalNumberOfLectures, setCompletedLectures, updateCompletedLectures} = buildCourseSlice

export default buildCourseSlice.reducer;