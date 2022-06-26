import { type BoxProps } from '@mui/material'
import { type ReactNode } from 'react'

export interface PageProps extends Omit<BoxProps, 'children' | 'maxWidth'> {
  /** Page content */
  children: ReactNode | undefined
  /** Enforce a max content width. True will set the width to max content width or pass a number or string for a specific value */
  maxWidth?: boolean | number | string
}
