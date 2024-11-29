import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmType, GenerType } from "../../types/types";
import { API } from "../../api/api";



// Thunk creators
export const getgenersThunk = createAsyncThunk<Array<GenerType>, string>('getgenersThunk', 
    async( language ) => {
    const data = await API.getGeners(language);
    return data.data.genres;
})

export const getGenerFIlmsThunk = createAsyncThunk<Array<FilmType>>('`getGenerFIlmsThunk`', 
    async( {id, language}) => {
        const data = await API.getGenerFIlmsById(id, language);
      
        return data.data.results;
})



// Type of Gener Slice
type GenerSliceType = {
    geners: Array<GenerType>
    genreFilms: Array<FilmType>
    currentGenre: string
}

// Define Gener Slice Initial State
const initialState : GenerSliceType = {
    geners: [],
    genreFilms: [],
    currentGenre: ''

}

// Create Geners Slice
const generSlice = createSlice({
    name: 'generSlice',
    initialState,
    reducers: {
        setCurrentGenre(state, action){
            state.currentGenre = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getgenersThunk.fulfilled, (state, action:PayloadAction<Array<GenerType>>) => {
            console.log(action.payload)
            state.geners = action.payload;
        })
        builder.addCase(getGenerFIlmsThunk.fulfilled, (state, action: PayloadAction<Array<FilmType>> ) => {
            state.genreFilms = action.payload
        })
    }
})


export const {setCurrentGenre} = generSlice.actions;

export default generSlice.reducer;