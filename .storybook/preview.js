import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/theme";

export const decorators = [
  Story =>
    (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </StyledEngineProvider>
    )
];

export const parameters = {
  actions: { argTypesRegex: "^(on|handle)[A-Z].*" }
};
