import { styled, Button } from "@mui/material";

// Creating a styled component based on Button
const StyledButton = styled(Button)(({ theme }) => ({
  // Setting the color and background color based on the theme mode
  color: theme.palette.mode === "dark" ? "#fff !important" : "#fff !important",
  backgroundColor:
    theme.palette.mode === "dark" ? "#000 !important" : "#1976d2 !important",
}));

// Creating a reusable button component
function ReusableButton({ variant = "primary", children, ...rest }) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

export default ReusableButton;
