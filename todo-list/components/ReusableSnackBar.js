import {Snackbar,Alert} from "@mui/material";

// Creating a reusable Snackbar component
function ReusableSnackBar({ open, handleClose, message, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default ReusableSnackBar;
