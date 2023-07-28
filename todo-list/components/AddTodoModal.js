import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "@/Redux/todoSlice";
import { TextField, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReusableButton from "./ReusableButton";
import { useForm } from "react-hook-form";
import ReusableSnackBar from "./ReusableSnackBar";
import ReusableSelect from "./ReusableSelect";

// Styles for the modal
const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "70%", md: "60%", lg: "50%", xl: "30%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  zIndex: 10,
  color: (theme) => theme.palette.text.primary,
};

function AddTodoModal({ type, modalOpen, setModalOpen, todo }) {
  // Generate random id for todos
  const generateRandomId = () => Math.floor(Math.random() * 1000000);

  // Using useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");

  // Using useForm hook to manage form state
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { title: "", status: "incomplete" } });
  const title = watch("title");
  const status = watch("status");

  const handleClose = () => {
    setOpen(false);
  };

  // Resetting form values when modal is opened or type is changed
  useEffect(() => {
    if (type === "update" && todo) {
      setValue("title", todo.title);
      setValue("status", todo.status);
    } else {
      reset({ title: "", status: "incomplete" });
    }
  }, [type, todo, setValue, reset, modalOpen]);

  // Handling form submission
  const handleSubmitt = (e) => {
    e.preventDefault();
    if (title === "") {
      // Show snackbar when title is empty
      setToastSeverity("error");
      setToastMessage("Please enter a title");
      setOpen(true);
      return;
    }

    // Dispatching addTodo or updateTodo action based on the type
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: generateRandomId(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        setToastSeverity("success");
        setToastMessage("Task added successfully");
        setOpen(true);
      }

      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          setToastSeverity("success");
          setToastMessage("Task Updated successfully");
          setOpen(true);
        } else {
          setToastSeverity("error");
          setToastMessage("No changes made");
          setOpen(true);
          return;
        }
      }

      setModalOpen(false);
    }
  };

  return (
    <>
      {modalOpen && (
        <Box sx={modalStyle}>
          <form onSubmit={handleSubmitt}>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
                aria-label="close"
                sx={{ marginRight: "10px" }}
              >
                <CloseIcon />
              </IconButton>
              <h1>{type === "add" ? "Add" : "Update"} TODO</h1>
            </Box>
            <Box sx={{ my: 2 }}>
              <TextField
                {...register("title", { required: "Please enter a title" })}
                label="Title"
                fullWidth
                margin="normal"
                error={!!errors.title}
                helperText={errors.title && errors.title.message}
              />
            </Box>

            <Box sx={{ my: 2 }}>
              <ReusableSelect
                fullWidth
                id="type"
                label="Status"
                options={[
                  { value: "incomplete", label: "Incomplete" },
                  { value: "complete", label: "Completed" },
                ]}
                {...register("status")}
              />
            </Box>

            <div>
              <ReusableButton type="submit" variant="contained" color="primary">
                {type === "add" ? "Add Task" : "Update Task"}
              </ReusableButton>
              <ReusableButton
                color="secondary"
                onClick={() => setModalOpen(false)}
                sx={{ marginLeft: "3px" }}
              >
                Cancel
              </ReusableButton>
            </div>
          </form>
        </Box>
      )}

      <ReusableSnackBar
        open={open}
        handleClose={handleClose}
        message={toastMessage}
        severity={toastSeverity}
      />
    </>
  );
}

export default AddTodoModal;
