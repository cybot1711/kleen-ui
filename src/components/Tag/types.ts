import { type ChipProps as MuiChipProps } from '@mui/material'

import { TYPES } from './const'

export type TagType = typeof TYPES[keyof typeof TYPES]

export interface TagProps extends Omit<MuiChipProps, 'color'> {
  /** Additional CSS class(es) */
  className?: string
  /** The type of tag. */
  type?: TagType
  /** The severity of impact */
  severity?: string
  /** Test ID */
  'data-testid'?: string
}
