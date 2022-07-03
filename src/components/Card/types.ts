import { type CardProps as MuiCardProps } from '@mui/material'

import { type ReactNode } from 'react'

export interface CardProps extends MuiCardProps {
  /** Additional CSS class(es) */
  className?: string
  /** The main tag */
  tag?: ReactNode | undefined
  /** The impact tag */
  impactTag?: ReactNode | undefined
  /** The title */
  title?: string
  /** The title */
  description?: string
  /** Electoral tag */
  isElectoral?: boolean
  /** Test ID */
  'data-testid'?: string
  /** Handles learn more click */
  handleClick?: () => void
}
