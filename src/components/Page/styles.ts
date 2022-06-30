import { type Theme } from '@mui/material'

export const styles = {
  page: ({ theme }: { theme: Theme }) => ({
    height: '100%',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.gallery,
  }),
  maxWidth: ({ theme }: { theme: Theme }) => ({
    margin: '0 auto',
    minWidth: theme.values.minContentWidthSm,
    [theme.breakpoints.up('md')]: {
      minWidth: theme.values.minContentWidthMd,
    },
  }),
} as const
