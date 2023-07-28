import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import TodoItem from "./TodoItem";

// Styling for the Paper component
const Item = styled(Paper)(({ theme }) => ({
  margin: "1rem 0",
  padding: "1rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AppContent() {
  // Using useSelector hook to get the todoList and filterStatus from the redux state
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  // Creating a sorted copy of the todoList
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

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
