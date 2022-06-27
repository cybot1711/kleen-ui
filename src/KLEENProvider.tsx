import React, { type FC, type ReactNode } from 'react'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import theme from './theme'

/**
 * Custom provider for providing theme to your app
 */
export const KlEENProvider: FC<{ children: ReactNode | undefined }> = ({ children }) => (
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
