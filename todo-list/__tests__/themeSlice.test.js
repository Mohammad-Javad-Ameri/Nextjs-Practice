import themeReducer, { toggleTheme } from "@/Redux/themeSlice";

describe("theme reducer", () => {
  it("should handle initial state", () => {
    expect(themeReducer(undefined, { type: "unknown" })).toEqual({
      theme: "light",
    });
  });

  it("should handle toggle", () => {
    const actual = themeReducer({ theme: "light" }, toggleTheme());
    expect(actual.theme).toEqual("dark");
  });

  it("should handle toggle back", () => {
    const actual = themeReducer({ theme: "dark" }, toggleTheme());
    expect(actual.theme).toEqual("light");
  });
});
