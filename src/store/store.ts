import { configureStore } from "@reduxjs/toolkit";

import generSlice from './slices/genersSlice.ts'
import globalSlice from './slices/globalSlice.ts'
import filmsSlice from './slices/filmsSlice.ts'

const store = configureStore({
  reducer: {
    globalState: globalSlice,
    genersState: generSlice,
    filmsState: filmsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
