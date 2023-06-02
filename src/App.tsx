import './App.css'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./components/HomePage";

const defaultTheme = createTheme();

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xl">
              <CssBaseline/>
              <HomePage/>
          </Container>
      </ThemeProvider>
  )
}

export default App
