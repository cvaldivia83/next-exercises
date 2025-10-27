"use client"

import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
};

export default Provider;