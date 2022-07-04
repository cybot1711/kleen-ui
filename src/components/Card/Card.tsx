import React, { type FC } from 'react'

import { Grid, Link, Typography } from '@mui/material'
import clsx from 'clsx'
import { type CardProps } from './types'
import { Root, StyledContent, StyledImpact, StyledImpactDesktop } from './styles'

/**
 * Card extended from material ui.
 */
export const Card: FC<CardProps> = ({
  className,
  title = 'Title',
  description = 'Card description',
  tag,
  impactTag,
  isElectoral = false,
  handleClick,
  'data-testid': dataTestId = 'Card',
  ...muiCardProps
}) => {
  const containerStyles = clsx(className, 'kleenCard')

  return (
    <Root className={containerStyles} data-testid={dataTestId} {...muiCardProps}>
      <Grid container direction='row' spacing={3} mb={5}>
        <Grid item>{tag}</Grid>
        <StyledImpactDesktop item>{impactTag}</StyledImpactDesktop>
      </Grid>
      <StyledContent>
        <Typography gutterBottom variant='h6' fontWeight='bold'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        {isElectoral && (
          <Link component='button' variant='body2' onClick={handleClick} fontWeight='bold'>
            Learn more
          </Link>
        )}
      </StyledContent>
      <Grid container spacing={3} mt={2}>
        <StyledImpact item xs>
          {impactTag}
        </StyledImpact>
      </Grid>
    </Root>
  )
}
