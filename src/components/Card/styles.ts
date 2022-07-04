import { Card as MuiCard, CardContent, Grid, type Theme } from '@mui/material'
import { styled } from '@mui/material/styles'

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

export const Root = styled(MuiCard)(styles.container) as typeof MuiCard
export const StyledContent = styled(CardContent)(styles.content)
export const StyledImpact = styled(Grid)(styles.impact) as typeof Grid
export const StyledImpactDesktop = styled(Grid)(styles.impactDesktop) as typeof Grid
