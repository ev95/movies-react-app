import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/api";




export const getgenersThunk = createAsyncThunk('getgenersThunk', async() => {
    const data = await API.getGeners();
    return data.data;
})

const generSlice = createSlice({
    name: 'generSlice',
    initialState: {
        geners: [],

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getgenersThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state.geners = action.payload.genres;
        })
    }
})

export default generSlice.reducer;