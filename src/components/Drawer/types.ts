import { type ReactNode } from 'react'
import { type PaperProps } from '@mui/material'

export interface DrawerProps extends Omit<PaperProps, 'title'> {
  /** Additional CSS class(es) */
  className: string
  /** Test ID */
  'data-testid': string
  /** Drawer position */
  anchor: 'left' | 'right' | 'top' | 'bottom'
  /** Drawer contents */
  children: ReactNode | undefined
  /** Handles on close event title */
  onClose: () => void
  /** Is the drawer Open? */
  open: boolean
}
