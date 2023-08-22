import { render, screen } from "@/utils/test-utils";
import AppContent from "@/components/AppContent";
import { getTodos } from "@/utils/getTodos";

// Mocking the getTodos function
jest.mock("@/utils/getTodos", () => ({
  getTodos: jest.fn(),
}));

describe("AppContent component", () => {
  // Test case for when there are no todos
  it("renders a message when there are no todos", () => {
    // Overriding getTodos to return an empty array
    function getTodos() {
      return [];
    }
    // Rendering the component with the overridden getTodos
    render(<AppContent />, { getTodos });

    // Checking if "No Todos" is present in the document
    expect(screen.getByText("No Todos")).toBeInTheDocument();
  });

  // Test case for when there are todos
  it("renders a list of todos", async () => {
    const todos = [
      { id: 1, title: "Test todo 1", status: "complete" },
      { id: 2, title: "Test todo 2", status: "complete" },
    ];

    getTodos.mockReturnValue(todos);

    const initialState = {
      todo: {
        todoList: todos,
        filterStatus: "all",
      },
    };
    // Rendering the component with the initial state
    render(<AppContent />, { initialState });

    const todo1 = await screen.findByText(/Test todo 1/);
    const todo2 = await screen.findByText(/Test todo 2/);
    // Checking if the todos are present in the document
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });
});
