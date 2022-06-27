import React, { type FC } from 'react'

import { Chip as MuiChip, styled } from '@mui/material'
import clsx from 'clsx'

import { TYPES } from './const'
import { styles } from './styles'
import { type TagProps } from './types'

/**
 * Chips are compact elements that represent an input, attribute, or action.
 * Extends the MUI Tag. See https://material-ui.com/api/chip/
 */
const Tag: FC<TagProps> = styled(
  ({
    className,
    type = TYPES.ON_TRACK,
    label = 'ON TRACK',
    severity = 'MEDIUM',
    'data-testid': dataTestId = 'Tag',
    ...muiChipProps
  }: TagProps) => {
    let tagLabel = label
    const containerStyles = clsx(className, 'kleenTag')

    if (type === TYPES.ON_TRACK) tagLabel = 'ON TRACK'
    if (type === TYPES.OFF_TRACK) tagLabel = 'OFF TRACK'
    if (type === TYPES.IMPACT) tagLabel = `${severity} IMPACT`

    return (
      <MuiChip
        className={containerStyles}
        data-testid={dataTestId}
        label={tagLabel}
        {...muiChipProps}
      />
    )
  },
)(styles.container)

export default Tag
