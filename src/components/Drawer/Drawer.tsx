import React, { type FC } from 'react'

import { Close } from '@mui/icons-material'
import { Drawer as MuiDrawer, IconButton } from '@mui/material'
import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import { styles } from './styles'
import { type DrawerProps } from './types'

// @ts-expect-error: type mismatch
const Root = styled(MuiDrawer)(styles.container) as typeof MuiDrawer
const StyledContentContainer = styled('div')(styles.contentContainer)
// @ts-expect-error: type mismatch
const StyledIconButton = styled(IconButton)(styles.closeX) as typeof IconButton

/** Slide-out drawer */
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
