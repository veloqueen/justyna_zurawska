import "@fontsource-variable/mulish";


import { theme } from "./utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ComingSoon/>
    </ThemeProvider>
  );
}

export default App;
