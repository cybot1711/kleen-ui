import React, { type FC } from 'react'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import theme from '../../../theme'
import { type TestWrapperProps } from './types'

const TestWrapper: FC<TestWrapperProps> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledEngineProvider>
)

export default TestWrapper
