import { Theme } from '@mui/material'

export const styles = {
  container: ({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(4),
    boxShadow: theme.customShadow,
    borderRadius: 16,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    },
  }),
  content: {
    padding: 0,
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
