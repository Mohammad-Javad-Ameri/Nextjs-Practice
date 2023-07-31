import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import themeReducer from "@/redux/themeSlice";
import todoReducer from "@/redux/todoSlice";

// Custom render function for components need to connected to the Redux store
function render(
  component,
  {
    // Initial state for the Redux store
    initialState,
    // Creating a Redux store with the theme and todo reducers
    // If a store is provided in the options, it will be used instead
    store = configureStore({
      reducer: {
        theme: themeReducer,
        todo: todoReducer,
      },
      preloadedState: initialState,
    }),
    // Other options for the render function
    ...renderOptions
  } = {}
) {
  // Wrapper component to wrap the provided component with a Redux Provider
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  // Using the wrapper when rendering the component
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

// Re-exporting everything from @testing-library/react
export * from "@testing-library/react";
// Overriding the render method from @testing-library/react with the custom render function
export { render };
