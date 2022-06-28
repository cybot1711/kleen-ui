import React, { type FC } from 'react'

import { Card as MuiCard, styled, Typography, CardContent, Grid } from '@mui/material'
import clsx from 'clsx'
import { styles } from './styles'
import { type CardProps } from './types'

const StyledContent = styled(CardContent)(styles.content)
const StyledImpact = styled(Grid)(styles.impact)
const StyledImpactDesktop = styled(Grid)(styles.impactDesktop)

/**
 * Chips are compact elements that represent an input, attribute, or action.
 * Extends the MUI Card. See https://material-ui.com/api/card/
 */
export const Card: FC<CardProps> = styled(
  ({
    className,
    title = 'Title',
    description = 'Card description',
    tag,
    impactTag,
    'data-testid': dataTestId = 'Card',
    ...muiCardProps
  }: CardProps) => {
    const containerStyles = clsx(className, 'kleenCard')

    return (
      <MuiCard className={containerStyles} data-testid={dataTestId} {...muiCardProps}>
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
      </MuiCard>
    )
  },
)(styles.container)
