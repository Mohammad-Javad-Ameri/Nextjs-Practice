"use client"
import Header from "@/components/Header";
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme,darkTheme } from "@/store/theme";
import Buttons from "@/components/Buttons";

export default function Home() {
   const theme = useSelector((state) => state.theme.theme === 'light' ? lightTheme : darkTheme);
  return (
        <ThemeProvider theme={theme}>
     <Header/>
     <Buttons/>
      </ThemeProvider>
  );
}
