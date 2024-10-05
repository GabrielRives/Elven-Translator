import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstColor: "#b7ff1d",
  secondColor: "#599e00",
  thirdColor: "#ffdd83",
  fourthColor: "#d89400",
  direction: "45deg",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  width: "100%",
  height: "100vh",
  position: "fixed",
  zIndex: "-2",
};

const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    changeColors: (state, action) => {
      //recupération du payload de mon action
      const {
        firstColor,
        secondColor,
        thirdColor,
        fourthColor,
        direction,
        backgroundSize,
        animation,
        width,
        height,
        position,
        zIndex,
      } = action.payload;
      return {
        ...state,
        firstColor,
        secondColor,
        thirdColor,
        fourthColor,
        direction,
        backgroundSize,
        animation,
        width,
        height,
        position,
        zIndex,
      };
    },
    changeToLightMode: (state) => {
      return {
        ...state,
        firstColor: "#ff1d1d",
        secondColor: "#9e0000",
        thirdColor: "#ffdd83",
        fourthColor: "#d89400",
        direction: "-45deg",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: "-2",
      };
    },
    changeToDarkMode: (state) => {
      return {
        ...state,
        firstColor: "#00087c",
        secondColor: "#0a0026",
        thirdColor: "#42005d",
        fourthColor: "#1b0026",
        direction: "-45deg",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: "-2",
      };
    },
  },
});

export const { changeToDarkMode, changeToLightMode, changeColors } =
  gradientSlice.actions;

export default gradientSlice.reducer;
