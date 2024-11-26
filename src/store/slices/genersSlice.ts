import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GenerType } from "../../types/types";
import { API } from "../../api/api";



// Thunk creators
export const getgenersThunk = createAsyncThunk('getgenersThunk', async( language: string ) => {
    const data = await API.getGeners(language);
    return data.data.genres;
})

// Type of Gener Slice
type GenerSliceType = {
    geners: Array<GenerType>
}

// Define Gener Slice Initial State
const initialState : GenerSliceType = {
    geners: []
}

// Create Geners Slice
const generSlice = createSlice({
    name: 'generSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getgenersThunk.fulfilled, (state, action:PayloadAction<Array<GenerType>>) => {
            console.log(action.payload)
            state.geners = action.payload;
        })
    }
})

export default generSlice.reducer;