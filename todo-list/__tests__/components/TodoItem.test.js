import { fireEvent, screen, cleanup } from "@testing-library/react";
import { render } from "@/utils/test-utils";
import TodoItem from "@/components/TodoItem";

// Cleanup after each test
afterEach(cleanup);

// Test suite for TodoItem component
describe("TodoItem", () => {
  let todo;

  // Setting up a todo before each test
  beforeEach(() => {
    todo = {
      id: "1",
      title: "Test Todo",
      status: "incomplete",
      time: new Date().toISOString(),
    };
  });

  // Test case for rendering the todo item with title and formatted date
  it("renders the todo item with title", () => {
    render(<TodoItem todo={todo} />);

    // Check if the todo title is displayed
    expect(screen.getByText(todo.title)).toBeInTheDocument();
  });

  // Test case for calling handleCheck when checkbox is clicked
  it("should call handleCheck when checkbox is clicked", () => {
    const { getByRole } = render(<TodoItem todo={todo} />);
    // Simulating a click event on the checkbox
    fireEvent.click(getByRole("checkbox"));
  });
  // Test case for calling handleDelete when DeleteIcon button is clicked
  it("should call handleDelete when DeleteIcon button is clicked", () => {
    const { getByLabelText } = render(<TodoItem todo={todo} />);
    // Simulating a click event on the DeleteIcon button
    fireEvent.click(getByLabelText("Delete"));
  });
  // Test case for calling handleUpdate when EditIcon button is clicked
  it("should call handleUpdate when EditIcon button is clicked", () => {
    const { getByLabelText } = render(<TodoItem todo={todo} />);

    // Simulating a click event on the EditIcon button
    fireEvent.click(getByLabelText("Edit"));
  });
});
