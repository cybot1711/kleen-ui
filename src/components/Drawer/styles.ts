import { Drawer as MuiDrawer, IconButton, type Theme } from '@mui/material'
import { styled } from '@mui/material/styles'

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

export const Root = styled(MuiDrawer)(styles.container) as typeof MuiDrawer
export const StyledContentContainer = styled('div')(styles.contentContainer)
export const StyledIconButton = styled(IconButton)(styles.closeX) as typeof IconButton
