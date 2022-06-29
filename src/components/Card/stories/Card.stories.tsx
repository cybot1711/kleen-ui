import React from 'react'
import type { Meta, Story } from '@storybook/react'

import { Card, type CardProps } from '..'
import { Tag, TYPES } from '../../Tag'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    tag: {
      options: ['ON TRACK', 'OFF TRACK'],
      mapping: {
        'ON TRACK': <Tag type={TYPES.ON_TRACK} />,
        'OFF TRACK': <Tag type={TYPES.OFF_TRACK} />,
      },
      defaultValue: 'ON TRACK',
    },
    impactTag: {
      options: ['HIGH', 'MEDIUM'],
      mapping: {
        HIGH: <Tag type={TYPES.IMPACT} severity={'HIGH'} />,
        MEDIUM: <Tag type={TYPES.IMPACT} severity={'MEDIUM'} />,
      },
      defaultValue: 'HIGH',
    },
  },
} as Meta<CardProps>

const Template: Story<CardProps> = (args) => <Card {...args} />

export const BasicUsage = Template.bind({})
BasicUsage.storyName = 'Basic usage'
BasicUsage.args = {
  className: 'some-class',
  title: 'Card title',
  description:
    'This is a very long description. It was put here to lengthen the card in the story. This is a very long description. It was put here to lengthen the card in the story. This is a very long description. It was put here to lengthen the card in the story',
}
