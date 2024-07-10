import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    counter: counterReducer,
  },
});
