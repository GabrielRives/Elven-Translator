import { configureStore } from "@reduxjs/toolkit";
import gradientReducers from "./gradientSlice";

const store = configureStore({
  reducer: {
    gradient: gradientReducers,
  },
});

export default store;
