import React from 'react'
import type { Meta, Story } from '@storybook/react'

import { Tag, type TagProps, TYPES } from '..'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    type: {
      options: Object.values(TYPES),
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<TagProps>

const Template: Story<TagProps> = (args) => <Tag {...args} />

export const OnTrack = Template.bind({})
OnTrack.storyName = 'OnTrack usage'
OnTrack.args = {
  className: 'some-class',
  type: TYPES.ON_TRACK,
  label: 'ON TRACK',
  onDelete: undefined,
}

export const OffTrack = Template.bind({})
OffTrack.storyName = 'OffTrack usage'
OffTrack.args = {
  label: 'OFF TRACK',
  type: TYPES.OFF_TRACK,
  onDelete: undefined,
}

export const Impact = Template.bind({})
Impact.storyName = 'Impact usage'
Impact.args = {
  type: TYPES.IMPACT,
  severity: 'MEDIUM',
  onDelete: undefined,
}

export const ImpactHigh = Template.bind({})
ImpactHigh.storyName = 'ImpactHigh usage'
ImpactHigh.args = {
  type: TYPES.IMPACT,
  severity: 'HIGH',
  onDelete: undefined,
}
