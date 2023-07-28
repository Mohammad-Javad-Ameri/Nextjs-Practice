"use client";
// Importing the store and provider
import store from "./store";
import { Provider } from "react-redux";

export function Providers({ children }) {
  //wraps the entire application with a Provider component
  return <Provider store={store}>{children}</Provider>;
}
