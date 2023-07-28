import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/Redux/themeSlice";

function Header() {
  // Using useSelector hook to get the theme from the redux state
  const theme = useSelector((state) => state.theme.theme);

  // Using useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <PlaylistAddCheckIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Todo List
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <PlaylistAddCheckIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Todo List
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => dispatch(toggleTheme())}
            aria-label="mode"
          >
            {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
