import { fireEvent, screen } from "@testing-library/react";
import Buttons from "@/components/Buttons";
import { render } from "@/utils/test-utils";

// Test suite for Buttons component
describe("Buttons", () => {
  // Test case for rendering Add button
  it("renders Add button", () => {
    render(<Buttons />);
    // Checking if "Add Task" is present in the document
    expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
  });
  // Test case for opening AddTodoModal on Add Task button click
  it("opens AddTodoModal on Add Task button click", async () => {
    render(<Buttons />);

    // Simulating a click event on "Add Task" button
    fireEvent.click(screen.getByText("Add Task"));
    // Checking if "Add TODO" is present in the document
    expect(screen.getByText("Add TODO")).toBeDefined();
  });
});
