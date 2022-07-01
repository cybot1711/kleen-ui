import React, { type FC } from 'react'

import { Card as MuiCard, Typography, CardContent, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import { styles } from './styles'
import { type CardProps } from './types'

const Root = styled(MuiCard)(styles.container) as typeof MuiCard
const StyledContent = styled(CardContent)(styles.content)
const StyledImpact = styled(Grid)(styles.impact)
const StyledImpactDesktop = styled(Grid)(styles.impactDesktop)

/**
 * Card extended from material ui.
 */
export const Card: FC<CardProps> = ({
  className,
  title = 'Title',
  description = 'Card description',
  tag,
  impactTag,
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
      </StyledContent>
      <Grid container spacing={3} mt={2}>
        <StyledImpact item xs>
          {impactTag}
        </StyledImpact>
      </Grid>
    </Root>
  )
}
