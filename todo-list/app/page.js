"use client";
import Header from "@/components/Header";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/utils/theme";
import Buttons from "@/components/Buttons";
import AppContent from "@/components/AppContent";

export default function Home() {
  // Using useSelector hook to get the current theme from the redux state
  const theme = useSelector((state) =>
    state.theme.theme === "light" ? lightTheme : darkTheme
  );

  return (
    // Wrapping all components within the ThemeProvider to apply the current theme
    <ThemeProvider theme={theme}>
      <Header />
      <Buttons />
      <AppContent />
    </ThemeProvider>
  );
}
