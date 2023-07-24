import { styled } from "@mui/system";
import {
  Button,
  Select,
  MenuItem,
  Stack,
  Card,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// A styled-card component is created with background color based on theme.
const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#1976d2" : "#88888",
  textAlign: "center",
  alignItems: "baseline",
  margin: "60px",
}));

// A custom button styled-component that changes color based on theme
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#888" : "",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(136, 136, 136, 0.1)"
        : "rgba(0, 0, 0, 0)",
  },
}));

const FormControls = styled(FormControl)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "" : "#000000",
  color: theme.palette.mode === "dark" ? "#fff" : "",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#888" : "",
   
  },
}));

export default function Buttons() {
  const [modalOpen, setModalOpen] = useState(false);
  //   const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(null);
  const dispatch = useDispatch();

  // Function to handle change in status filter.
  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    // A stack for aligning children in a row
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="baseline"
      spacing={2}
    >
      <Item>
        <ColorButton variant="contained" onClick={() => setModalOpen(true)}>
          Add Task
        </ColorButton>
      </Item>

      <FormControls sx={{ minWidth: 120}}>
        <InputLabel id="label">Status</InputLabel>
        <Select
          id="status"
          labelId="label"
          onChange={(e) => updateFilter(e)}
          value={filterStatus}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
          <MenuItem value="complete">Completed</MenuItem>
        </Select>
      </FormControls>
    </Stack>
  );
}
