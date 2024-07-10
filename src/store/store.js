// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    counter: counterReducer,
  },
});
export default store;