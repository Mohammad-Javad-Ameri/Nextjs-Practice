import { createSlice } from "@reduxjs/toolkit";

// Function to get todos from local storage
const getTodos = () => {
  const allTodos = window.localStorage.getItem("todoList");
  if (allTodos) {
    return JSON.parse(allTodos);
  }
  localStorage.setItem("todolist", []);
  return [];
};

// Initial state for the todo slice
const initialTodoValue = {
  filterStatus: "all",
  todoList: getTodos(),
};

// Creating a slice for the todo
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoValue,
  reducers: {
    // Reducer to add a todo
    addTodo: (state, action) => {
      // Adding the new todo to the state
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        // Adding the new todo to the todo list
        todoListArr.push({ ...action.payload });
        // Updating the todo list in local storage
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        // If there is no todo list in local storage, creating a new one with the new todo
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    // Reducer to update a todo
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        // Updating the todo in the todo list
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            // Updating the status and title of the todo
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        // Updating the todo list in the state
        state.todoList = [...todoListArr];
      }
    },
    // Reducer to delete a todo
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        // Removing the todo from the todo list
        const newTodoListArr = todoListArr.filter(
          (todo) => todo.id !== action.payload
        );
        window.localStorage.setItem("todoList", JSON.stringify(newTodoListArr));
        // Updating the todo list in the state
        state.todoList = newTodoListArr;
      }
    },
    // Reducer to change the filter status
    changeStatus: (state, action) => {
      // Updating the filter status in the state
      state.filterStatus = action.payload;
    },
  },
});

// Exporting the actions from the slice
export const { addTodo, updateTodo, deleteTodo, changeStatus } =
  todoSlice.actions;

// Exporting the reducer from the slice
export default todoSlice.reducer;
