import React from "react";

import { ThemeProvider } from "@emotion/react";
import { BaseMuiTheme } from "@theme";
import EditProfile from "@pages/Profile/EditProfile";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  return (
    <ThemeProvider theme={BaseMuiTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <EditProfile />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
