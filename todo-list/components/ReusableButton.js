import { styled, Button } from "@mui/material";

// Creating a styled component based on Button
const StyledButton = styled(Button)(({ theme }) => ({
  // Setting the color and background color based on the theme mode
  color: theme.palette.mode === "dark" ? "#fff" : "",
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#888" : "",
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(136, 136, 136, 0.1)" : "",
  },
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
