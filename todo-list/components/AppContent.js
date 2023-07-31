import { useSelector,useDispatch } from "react-redux";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import TodoItem from "./TodoItem";
import { initializeTodos } from "@/redux/todoSlice";
import { getTodos } from "@/utils/getTodos";
import { useEffect } from "react";

// Styling for the Paper component
const Item = styled(Paper)(({ theme }) => ({
  margin: "1rem 0",
  padding: "1rem",
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

function AppContent() {
  // Using useSelector hook to get the todoList and filterStatus from the redux state
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();
       useEffect(() => {
        const allTodos = getTodos();
        dispatch(initializeTodos(allTodos));
      }, []);

  // Creating a sorted copy of the todoList
  let sortedTodoList = [];
  if (todoList) {
    sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  }

  // Filtering the sortedTodoList based on the filterStatus
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <div>
      {filteredTodoList && filteredTodoList.length > 0 ? (
        // Rendering a TodoItem component for each todo in the filteredTodoList
        filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        // Rendering a message when there are no todos
        <Item>No Todos</Item>
      )}
    </div>
  );
}

export default AppContent;
