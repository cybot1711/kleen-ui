import { type Theme } from '@mui/material'

const closeXSize = 32

export const styles = {
  container: ({ theme }: { theme: Theme }) => ({
    '&.MuiPaper-root': {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: theme.customShadow,
    },
  }),
  contentContainer: {
    flexGrow: 1,
    overflow: 'auto',
  },
  closeX: ({ theme }: { theme: Theme }) => ({
    '&.MuiButtonBase-root': {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      width: closeXSize,
      height: closeXSize,
      zIndex: 10,
    },
  }),
} as const
