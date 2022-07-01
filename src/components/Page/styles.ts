import { type Theme } from '@mui/material'

export const styles = {
  page: ({ theme }: { theme: Theme }) => ({
    '&.MuiBox-root': {
      height: '100%',
      overflowX: 'auto',
      padding: `${theme?.spacing(5)} 0`,
      backgroundColor: theme.palette.gallery,
    },
  }),
  maxWidth: ({ theme }: { theme: Theme }) => ({
    margin: '0 auto',
    minWidth: theme.values.minContentWidthXs,
    [theme.breakpoints.up('md')]: {
      minWidth: theme.values.minContentWidthMd,
    },
  }),
}
