import { type Theme } from '@mui/material'

export const styles = {
  page: ({ theme }: { theme: Theme }) => ({
    height: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.gallery,
  }),
  maxWidth: {
    margin: '0 auto',
  },
}
