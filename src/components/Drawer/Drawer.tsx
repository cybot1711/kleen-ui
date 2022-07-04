import React, { type FC } from 'react'

import { Close } from '@mui/icons-material'
import clsx from 'clsx'
import { Root, StyledContentContainer, StyledIconButton, styles } from './styles'
import { type DrawerProps } from './types'

/**
 * Slide-out drawer extended from MUI drawer.
 */
export const Drawer: FC<DrawerProps> = ({
  'data-testid': dataTestId = 'Drawer',
  anchor = 'right',
  children,
  className,
  onClose,
  ...drawerProps
}) => {
  const containerStyles = clsx(styles.container, className, 'kleenDrawer')

  return (
    <Root
      PaperProps={{
        // @ts-expect-error: type mismatch
        component: 'section',
      }}
      anchor={anchor}
      className={containerStyles}
      data-testid={dataTestId}
      onClose={onClose}
      {...drawerProps}
    >
      <StyledIconButton aria-label='close' onClick={onClose}>
        <Close fontSize='inherit' />
      </StyledIconButton>

      <StyledContentContainer>{children}</StyledContentContainer>
    </Root>
  )
}
