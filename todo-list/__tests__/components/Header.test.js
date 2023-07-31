import React from "react";
import { render, fireEvent, screen } from "@/utils/test-utils";
import { useSelector } from "react-redux";
import Header from "@/components/Header";

const initialState = {
  theme: {
    theme: "light",
  },
};

describe("Header", () => {
  it("should render correctly", () => {
    const { container } = render(<Header />, { initialState });
    expect(container).toBeInTheDocument();
  });

  it("should change the theme when the toggle button is clicked", () => {
    // Mock component that renders the current theme
    const CurrentTheme = () => {
      const theme = useSelector((state) => state.theme.theme);
      return <div>{theme}</div>;
    };

    render(
      <>
        <Header />
        <CurrentTheme />
      </>,
      { initialState }
    );

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    // Check if the theme in the state has changed
    expect(screen.getByText("dark")).toBeInTheDocument();
  });
});
