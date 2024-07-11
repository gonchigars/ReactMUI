import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import moviesReducer from "./moviesSlice"; 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
  },
});
