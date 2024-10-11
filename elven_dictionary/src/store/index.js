import { configureStore } from "@reduxjs/toolkit";
import gradientReducers from "./gradientSlice";
import translateHomeReducers from "./translateHomeSlice";

const store = configureStore({
  reducer: {
    gradient: gradientReducers,
    translateHome: translateHomeReducers,
  },
});

export default store;
