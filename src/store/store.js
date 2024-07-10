import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    counter: counterReducer,
  },
});

export default store;
