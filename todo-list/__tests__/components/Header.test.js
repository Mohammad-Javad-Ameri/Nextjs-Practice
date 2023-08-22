import React from "react";
import { render, fireEvent, screen } from "@/utils/test-utils";
import { useSelector } from "react-redux";
import Header from "@/components/Header";

// Initial state for the redux store
const initialState = {
  theme: {
    theme: "light",
  },
};

// Test suite for Header component
describe("Header", () => {
  // Test case for correct rendering of Header
  it("should render correctly", () => {
    // Rendering the Header component with initial state
    const { container } = render(<Header />, { initialState });
    // Checking if the rendered container is present in the document
    expect(container).toBeInTheDocument();
  });

  // Test case for theme change on toggle button click
  it("should change the theme when the toggle button is clicked", () => {
    // Mock component that renders the current theme
    const CurrentTheme = () => {
      // Using useSelector hook to get the current theme from the state
      const theme = useSelector((state) => state.theme.theme);
      return <div>{theme}</div>;
    };
    // Rendering the Header and CurrentTheme components with initial state
    render(
      <>
        <Header />
        <CurrentTheme />
      </>,
      { initialState }
    );

    // Getting the toggle button by its role
    const toggleButton = screen.getByRole("button");
    // Simulating a click event on the toggle button
    fireEvent.click(toggleButton);

    // Check if the theme in the state has changed
    expect(screen.getByText("dark")).toBeInTheDocument();
  });
});
