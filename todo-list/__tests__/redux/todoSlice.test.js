import todoReducer, {
  addTodo,
  updateTodo,
  deleteTodo,
  changeStatus,
} from "@/redux/todoSlice";

describe("todo reducer", () => {
  // Initial state for the tests
  const initialState = {
    filterStatus: "all",
    todoList: [],
  };

  it("should handle initial state", () => {
    // Checking if the initial state is as defined above when an unknown action is dispatched
    expect(todoReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addTodo", () => {
    // Checking if a todo is added to the todoList when addTodo action is dispatched
    const actual = todoReducer(
      initialState,
      addTodo({ id: 1, title: "Test Todo", status: "incompelete" })
    );
    expect(actual.todoList).toEqual([
      { id: 1, title: "Test Todo", status: "incompelete" },
    ]);
  });

  it("should handle updateTodo", () => {
    // Setting up a state with a todo in the todoList
    const state = {
      ...initialState,
      todoList: [{ id: 1, title: "Test Todo", status: "incompelete" }],
    };
    // Checking if the todo is updated in the todoList when updateTodo action is dispatched
    const actual = todoReducer(
      state,
      updateTodo({ id: 1, title: "Updated Todo", status: "completed" })
    );
    expect(actual.todoList).toEqual([
      { id: 1, title: "Updated Todo", status: "completed" },
    ]);
  });

  it("should handle deleteTodo", () => {
    // Setting up a state with a todo in the todoList
    const state = {
      ...initialState,
      todoList: [{ id: 1, title: "Test Todo", status: "incompelete" }],
    };
    // Checking if the todo is deleted from the todoList when deleteTodo action is dispatched
    const actual = todoReducer(state, deleteTodo(1));
    expect(actual.todoList).toEqual([]);
  });

  // Test case for handling changeStatus action
  it("should handle changeStatus", () => {
    // Checking if the filterStatus is updated when changeStatus action is dispatched
    const actual = todoReducer(initialState, changeStatus("completed"));
    expect(actual.filterStatus).toEqual("completed");
  });
});
