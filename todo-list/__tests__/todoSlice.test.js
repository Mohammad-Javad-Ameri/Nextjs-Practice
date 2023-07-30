import todoReducer, {
  addTodo,
  updateTodo,
  deleteTodo,
  changeStatus,
} from "@/Redux/todoSlice";

describe("todo reducer", () => {
  const initialState = {
    filterStatus: "all",
    todoList: [],
  };

  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addTodo", () => {
    const actual = todoReducer(
      initialState,
      addTodo({ id: 1, title: "Test Todo", status: "incompelete" })
    );
    expect(actual.todoList).toEqual([
      { id: 1, title: "Test Todo", status: "incompelete" },
    ]);
  });

  it("should handle updateTodo", () => {
    const state = {
      ...initialState,
      todoList: [{ id: 1, title: "Test Todo", status: "incompelete" }],
    };
    const actual = todoReducer(
      state,
      updateTodo({ id: 1, title: "Updated Todo", status: "completed" })
    );
    expect(actual.todoList).toEqual([
      { id: 1, title: "Updated Todo", status: "completed" },
    ]);
  });

  it("should handle deleteTodo", () => {
    const state = {
      ...initialState,
      todoList: [{ id: 1, title: "Test Todo", status: "incompelete" }],
    };
    const actual = todoReducer(state, deleteTodo(1));
    expect(actual.todoList).toEqual([]);
  });

  it("should handle changeStatus", () => {
    const actual = todoReducer(initialState, changeStatus("completed"));
    expect(actual.filterStatus).toEqual("completed");
  });
});
