import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmType } from "../../types/types";
import { API } from "../../api/API.ts";


// Thunk creators
export const getFIlmByIdThunk = createAsyncThunk<FilmType, {id: string | undefined, language: string}>('getFIlmById', 
    async ({id, language}) => {
      const data =  await API.getFilmById(id, language);
      console.log(data.data)
      return data.data
    })

// Type of Global Slice
type FilmSLiceType = {
    currentFilm: FilmType | null
}

// Define Gener Slice Initial State
const initialState: FilmSLiceType = {
    currentFilm: null
}

// Create Global Slice
const filmsSLice = createSlice({
    name: 'filmsSLice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getFIlmByIdThunk.fulfilled, (state, action) => {
            state.currentFilm = action.payload
        })
    }
})

export default filmsSLice.reducer;