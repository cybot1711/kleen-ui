import React from 'react'

import Drawer from '../Drawer'
import type { Meta, Story } from '@storybook/react'
import { type DrawerProps } from '../types'

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    children: { control: { disable: true } },
    onClose: { action: 'onClose' },
  },
} as Meta<DrawerProps>

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />

export const Basic = Template.bind({})
Basic.storyName = 'Basic usage'
Basic.args = {
  anchor: 'right',
  className: 'some-class',
  children: <div style={{ padding: 24, width: 250 }}>Drawer content</div>,
  open: true,
}
