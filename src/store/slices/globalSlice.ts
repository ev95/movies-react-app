import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getgenersThunk } from "./genersSlice";

// Thunk creators
export const changeLanguageThunk = createAsyncThunk('changeLanguageThunk',
    async ({language}, {dispatch})=>{
        dispatch(getgenersThunk(language));
    }
)

// Type of Global Slice
type GlobalSliceType = {
    language: string
}

// Define Gener Slice Initial State
const initialState: GlobalSliceType = {
    language: 'en-US'
}

// Create Global Slice
const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        changeLanguage( state, action: PayloadAction<string>){
            state.language = action.payload
        }
    },
    extraReducers: () => {
    }
})

export const { changeLanguage } = globalSlice.actions;
export default globalSlice.reducer;