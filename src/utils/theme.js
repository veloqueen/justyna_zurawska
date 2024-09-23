// material-ui
import { createTheme } from "@mui/material";
// colors
const successGreen = "rgba(11, 187, 113, 1)"; // #0BBB71
const successLightGreen = "rgba(22, 249, 154, 1)"; // #16F99A
const errorRed = "rgba(255, 53, 53, 1)"; // #FF3535
const errorLightRed = "rgba(255, 112, 112, 1)"; // #FF7070
// const gradientPink = "rgba(255, 139, 255, 1)"; // #FF8BFF
// const gradientBlue = "rgba(30, 157, 255, 1)"; // #1E9DFF

export let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#44576D",
    },
    secondary: {
      main: "#DFEBF6",
    },
    tertiary: {
      main: "#AAC7D8",

    },
    success: {
      main: successGreen,
      light: successLightGreen,
    },
    error: {
      main: errorRed,
      light: errorLightRed,
    },
  },
  typography: {
    fontFamily: "'Mulish Variable', 'Helvetica', 'Arial', sans-serif",
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "3.75rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
      
    },
    h6: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "0.75rem",
    },
    subtitle2: {
      fontSize: "0.675rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#120F17",
          backgroundSize: "100%",
          overflowX: "hidden",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
      styleOverrides: {
        root: {
          height: "3rem",
          background: theme.palette.tertiary.main,
          color: theme.palette.primary.main,
          boxShadow: "none",
          alignItems: "center",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: "transparent",
          "&:hover": {
            backgroundImage: "linear-gradient(to left, #FF8BFF, #1E9DFF)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "0.75rem",
          background: "linear-gradient(242deg, #FF8BFF 16.55%, #1E9DFF 93.07%)",
          color: theme.palette.common.black,
          fontSize: "0.9375rem",
          padding: "0.75rem 2rem",
          textTransform: "capitalize",
          fontWeight: 500,
          "&:hover": {
            background:
              "linear-gradient(269deg, #E866E8 10.23%, #188FEB 95.19%)",
          },
          [theme.breakpoints.down("lg")]: {
            fontSize: "0.875rem",
            padding: "0.75rem 2rem",
          },
          [theme.breakpoints.up("xl")]: {
            fontSize: "0.875vw",
            padding: "0.75rem 2.5rem",
            borderRadius: "0.75vw",
          },
        },
        text: {
          background: "transparent",
          color: theme.palette.common.white,
          textTransform: "capitalize",
          fontSize: "0.875rem",
          padding: 0,
          width: "fit-content",
          "&:hover": {
            background: "transparent",
            color: "#FFD1DC",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          background: "linear-gradient(224deg, #FF8BFF 8.64%, #1E9DFF 105.77%)",
          borderRadius: "0.4375rem",
          padding: 0,
          color: "transparent",
          margin: 0,
          "&.Mui-checked": {
            background:
              "linear-gradient(224deg, #FF8BFF 8.64%, #1E9DFF 105.77%)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#1A171F",
          borderColor: "transparent",
          borderRadius: "0.75rem",
          minHeight: { xs: "20%", lg: "60%" },
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.main,
            },
          },
        },
        input: {
          paddingRight: "0.75rem",
          "&::placeholder": {
            fontSize: "0.9375rem",
            [theme.breakpoints.up("xl")]: {
              fontSize: "0.825vw",
            },
          },
          [theme.breakpoints.up("xl")]: {
            fontSize: "0.825vw",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          fontWeight: "500",
          fontSize: "0.9375rem",
          color: theme.palette.common.white,
          "&:hover": {
            textDecoration: "none",
          },
          [theme.breakpoints.up("xl")]: {
            fontSize: "0.825vw",
          },
        },
      },
    },
  },
});
