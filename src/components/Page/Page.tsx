import React, { type FC } from 'react'

import { Box, type Theme } from '@mui/material'
import { styled } from '@mui/material/styles'

import { styles } from './styles'
import { type PageProps } from './types'

const Root = styled(Box)(styles.page) as typeof Box
const PageContent = styled('div')(styles.maxWidth)

/**
 * Wrapper component for pages.
 * Additional props will be applied to the root div element.
 */
const Page: FC<PageProps> = ({ children, maxWidth = false, ...containerProps }) => (
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

export default Page
