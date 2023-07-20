import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step : 1,
    course : null,
    editCourse : false,
    paymentLoading : true
}

const courseStepSlice = createSlice({
    name : "courseSlice",
    initialState,
    reducers : {

        setStep : (state, action) => {
            state.step = action.payload
        },

        setCourse : (state, action) => {
            state.course = action.payload
        },

        setEditCourse : (state, action) => {
            state.editCourse = action.payload
        },

        setPaymentLoading : (state, action) => {
            state.paymentLoading = action.payload
        },

        resetCourse : (state, action) => {
            state.step = 1;
            state.course = null;
            state.editCourse = null;
        }
    },    
})

export const {setStep, setCourse, setEditCourse, setPaymentLoading, resetCourse} = courseStepSlice;
export default courseStepSlice.reducer;