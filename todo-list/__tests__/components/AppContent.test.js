import { render, screen } from "@/utils/test-utils";
import AppContent from "@/components/AppContent";
import { getTodos } from "@/utils/getTodos";

jest.mock("@/utils/getTodos", () => ({
  getTodos: jest.fn(),
}));

describe("AppContent component", () => {
  it("renders a message when there are no todos", () => {
    function getTodos() {
      return [];
    }

    render(<AppContent />, { getTodos });

    expect(screen.getByText("No Todos")).toBeInTheDocument();
  });

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

    render(<AppContent />, { initialState });

    const todo1 = await screen.findByText(/Test todo 1/);
    const todo2 = await screen.findByText(/Test todo 2/);

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });
});
