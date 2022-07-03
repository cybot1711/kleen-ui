import { type Theme } from '@mui/material'

export const styles = {
  container: ({ theme }: { theme: Theme }) => ({
    '&.MuiPaper-root': {
      padding: theme.spacing(4),
      boxShadow: theme.customShadow,
      borderRadius: theme.spacing(2),
      minWidth: 180,
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(5),
      },
      '&:hover': {
        boxShadow: theme.customShadowRaised,
      },
    },
  }),
  content: {
    padding: 0,
    flex: 1,
  },
  impact: ({ theme }: { theme: Theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  }),
  impactDesktop: ({ theme }: { theme: Theme }) => ({
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  }),
} as const
