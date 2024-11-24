import { configureStore } from "@reduxjs/toolkit";

import generSlice from './slices/genersSlice.ts'
const store = configureStore({
  reducer: {
    genersState: generSlice
  },
});

export default store;
