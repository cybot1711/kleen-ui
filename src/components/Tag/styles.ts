import { type Theme } from '@mui/material'

import { TYPES } from './const'
import { type TagType } from './types'

export const styles = {
  container: ({ type = TYPES.ON_TRACK, theme }: { type?: TagType; theme: Theme }) => {
    const typeStyles = {
      [TYPES.ON_TRACK]: {
        backgroundColor: theme.palette.greenPillBg,
        color: theme.palette.greenPillText,
      },
      [TYPES.OFF_TRACK]: {
        backgroundColor: theme.palette.orangePillBg,
        color: theme.palette.orangePillText,
      },
      [TYPES.IMPACT]: {
        backgroundColor: theme.palette.grayPillBg,
      },
    } as const

    return {
      '&.MuiChip-filledDefault': {
        backgroundColor: theme.palette.grey[200],
      },
      '&.kleenTag':
        type === TYPES.ON_TRACK || type === TYPES.OFF_TRACK || type === TYPES.IMPACT
          ? {
              borderRadius: 4,
              ...typeStyles?.[type],
              ...(type === TYPES.IMPACT
                ? { width: '100%', [theme.breakpoints.up('lg')]: { width: 'auto' } }
                : {}),
            }
          : {},
    }
  },
} as const
