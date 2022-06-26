import React from 'react'

import { type Meta, type Story } from '@storybook/react'

import Page from '../Page'
import { PageProps } from '../types'

export default {
  title: 'Components/Page/Page',
  component: Page,
} as Meta

const Template: Story<PageProps> = (args) => <Page {...args}>Page content</Page>

export const Basic = Template.bind({})
Basic.storyName = 'Basic usage'
Basic.args = {
  maxWidth: false,
}
