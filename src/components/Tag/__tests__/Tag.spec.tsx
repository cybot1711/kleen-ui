import React from 'react'
import theme from '../../../theme'
import { render, screen } from '../../../utils/testUtils'

import Tag, { type TagProps, TYPES } from '..'

describe('Component:Tag', () => {
  let props: TagProps
  const view = () => render(<Tag {...props} />)

  beforeEach(() => {
    props = {}
  })

  it('renders the component', () => {
    view()
    expect(screen.getByText('ON TRACK')).toBeInTheDocument()
  })

  it('adds a custom class correctly', () => {
    props.className = 'some-class'
    view()
    expect(screen.getByTestId('Tag')).toHaveClass('some-class')
  })

  describe('Types', () => {
    it('renders the correct background colour for on track tag', () => {
      props.type = TYPES.ON_TRACK
      view()
      expect(screen.getByTestId('Tag')).toHaveStyle(`backgroundColor: ${theme.palette.greenPillBg}`)
      expect(screen.getByText('ON TRACK')).toBeInTheDocument()
    })

    it('renders the correct background colour for off track tag', () => {
      props.type = TYPES.OFF_TRACK
      view()
      expect(screen.getByTestId('Tag')).toHaveStyle(
        `backgroundColor: ${theme.palette.orangePillBg}`,
      )
      expect(screen.getByText('OFF TRACK')).toBeInTheDocument()
    })

    it('renders the correct background colour for the impact tag', () => {
      props.type = TYPES.IMPACT
      view()
      expect(screen.getByTestId('Tag')).toHaveStyle(`backgroundColor: ${theme.palette.grayPillBg}`)
      expect(screen.getByText('MEDIUM IMPACT')).toBeInTheDocument()
    })
  })
})
