import {createSlice} from "@reduxjs/toolkit"

export const loadingSlice = createSlice({
    name : "loadingSlice",
    initialState : {
        loading : false
    },
    reducers : {
        setLoading : (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;