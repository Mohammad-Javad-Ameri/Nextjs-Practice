import themeReducer, { toggleTheme } from "@/redux/themeSlice";

// Test suite for theme reducer
describe("theme reducer", () => {
  // Test case for handling initial state
  it("should handle initial state", () => {
    // Checking if the initial state is { theme: "light" } when an unknown action is dispatched
    expect(themeReducer(undefined, { type: "unknown" })).toEqual({
      theme: "light",
    });
  });

  it("should handle toggle", () => {
    // Checking if the state changes to { theme: "dark" } when toggleTheme action is dispatched
    const actual = themeReducer({ theme: "light" }, toggleTheme());
    expect(actual.theme).toEqual("dark");
  });

  it("should handle toggle back", () => {
    // Checking if the state changes back to { theme: "light" } when toggleTheme action is dispatched again
    const actual = themeReducer({ theme: "dark" }, toggleTheme());
    expect(actual.theme).toEqual("light");
  });
});
