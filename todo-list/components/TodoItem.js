import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "@/Redux/todoSlice";
import { Box, IconButton, Typography, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddTodoModal from "./AddTodoModal";
import ReusableSnackBar from "./ReusableSnackBar";
function TodoItem({ todo }) {
  // Using the useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Using the useState hook to manage state
  const [checked, setChecked] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");

  // Added for Snackbar
  const [open, setOpen] = useState(false);

  // Formatting the date
  const date = new Date(todo.time);
  const formattedDate = `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`;

  // Using the useEffect hook to update the checked state when the todo status changes
  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  // Handling the check event
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  // Handling the delete event
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    setToastMessage("Todo Deleted Successfully");
    setToastSeverity("success");
    setOpen(true);
  };

  // Handling the update event
  const handleUpdate = () => {
    setOpenUpdateModal(true);
  };

  // Handling the close event
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          borderColor: "grey.500",
          borderStyle: "solid",
          borderWidth: "1px",
          marginLeft: "5%",
          marginRight: "5%",
          backgroundColor: "background.paper",
          marginTop: "1%",
          marginBottom: "2%",
          borderRadius: 1,
          "&:last-child": {
            marginBottom: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Checkbox checked={checked} onClick={handleCheck} />
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                marginRight: 1,
                textDecoration:
                  todo.status === "complete" ? "line-through" : "none",
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {todo.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "block",
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {formattedDate}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleUpdate}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <AddTodoModal
        type="update"
        modalOpen={openUpdateModal}
        setModalOpen={setOpenUpdateModal}
        todo={todo}
      />

      <ReusableSnackBar
        open={open}
        handleClose={handleClose}
        message={toastMessage}
        severity={toastSeverity}
      />
    </>
  );
}

export default TodoItem;
