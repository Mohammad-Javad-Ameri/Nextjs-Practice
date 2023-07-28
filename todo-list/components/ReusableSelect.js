import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/system";

const FormControls = styled(FormControl)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#121212" : "",
  color: theme.palette.mode === "dark" ? "#fff" : "",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#888" : "",
  },
}));

function ReusableSelect({ id, label, options = [], ...rest }) {
  return (
    <FormControls variant="outlined" {...rest}>
      <InputLabel id={label}>{label}</InputLabel>
      <Select labelId={label} id={id} {...rest}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControls>
  );
}

export default ReusableSelect;
