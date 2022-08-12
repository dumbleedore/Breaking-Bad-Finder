import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { Menu } from "./screens/Menu/Menu";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="wrapper">
        <Menu></Menu>
      </div>
    </ThemeProvider>
  );
}
