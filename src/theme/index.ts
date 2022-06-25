import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: '"Source Sans Pro", Arial, sans-serif',
    fontSize: 13,
    fontWeightMedium: 600,
    h1: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
})

export { theme as default }
