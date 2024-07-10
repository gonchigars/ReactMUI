// src/store/store.js

import moviesReducer from "./moviesSlice";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    counter: counterReducer,

  },
});
export default store;
