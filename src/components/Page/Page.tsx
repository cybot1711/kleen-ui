import React, { type FC } from 'react'

import { PageContent, Root } from './styles'
import { type Theme } from '@mui/material'
import { type PageProps } from './types'

/**
 * Wrapper component for pages.
 * Additional props will be applied to the root div element.
 */
export const Page: FC<PageProps> = ({ children, maxWidth = false, ...containerProps }) => (
  <Root data-testid='Page' {...containerProps}>
    {maxWidth ? (
      <PageContent
        data-testid='PageContent'
        sx={(theme: Theme) => ({
          maxWidth: maxWidth === true ? theme.values.maxContentWidth : maxWidth,
        })}
      >
        {children}
      </PageContent>
    ) : (
      children
    )}
  </Root>
)
