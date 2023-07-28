import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import todoReducer from "./todoSlice";

// Configuring the store
const store = configureStore({
  // Setting the reducer field
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
  },
});

// Exporting the store
export default store;
