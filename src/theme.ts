import { createTheme } from "@mui/material/styles";

const fontFamily = "Roboto, sans-serif !important";

export const BaseMuiTheme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 18.5,
          minWidth: 142,
          minHeight: 36,
          margin: "0 6px",
          textTransform: "initial",
        },
      },
    },
  },
});
