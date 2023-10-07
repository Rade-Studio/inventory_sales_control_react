import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#37474F",
    },
    secondary: {
      main: "#B0BEC5",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#B0BEC5",
          color: "#000",
        },
      },
    },
  }
});

export default theme;
