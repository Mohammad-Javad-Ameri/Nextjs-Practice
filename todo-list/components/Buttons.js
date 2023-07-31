import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeStatus } from "@/redux/todoSlice";
import AddTodoModal from "./AddTodoModal";
import ReusableButton from "./ReusableButton";
import ReusableSelect from "./ReusableSelect";

export default function Buttons() {
  // Using useState hook to manage the state of modalOpen and filterStatus
  const [modalOpen, setModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  // Using useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Function to handle change in status filter.
  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(changeStatus(e.target.value));
  };
  return (
    // Using stack for aligning children in a row
    <>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="baseline"
        spacing={2}
        sx={{ marginTop: "30px" }}
      >
        <ReusableButton variant="contained" onClick={() => setModalOpen(true)}>
          Add Task
        </ReusableButton>

        <ReusableSelect
          sx={{ minWidth: 120 }}
          id="status"
          label="Status"
          onChange={(e) => updateFilter(e)}
          value={filterStatus}
          options={[
            { value: "all", label: "All" },
            { value: "incomplete", label: "Incomplete" },
            { value: "complete", label: "Completed" },
          ]}
        />
      </Stack>
      <AddTodoModal
        type="add"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}
