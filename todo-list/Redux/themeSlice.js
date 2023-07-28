import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state
const initialState = {
  theme: "light",
};

// Creating a slice for the theme
const themeSlice = createSlice({
  name: "theme",
  initialState,
  // Defining the reducers for the slice
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

// Exporting the actions from the slice
export const { toggleTheme } = themeSlice.actions;

// Exporting the reducer from the slice
export default themeSlice.reducer;
