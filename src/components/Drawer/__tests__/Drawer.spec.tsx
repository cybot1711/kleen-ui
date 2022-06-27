import React from 'react'

import Drawer, { type DrawerProps } from '..'
import { render, screen, fireEvent } from '../../../utils/testUtils'

describe('Component:Drawer', () => {
  let props: DrawerProps
  const view = () => render(<Drawer {...props} />)

  beforeEach(() => {
    // @ts-expect-error: we do not want all the props here
    props = {
      open: true,
      onClose: jest.fn(),
    }
  })

  afterEach(jest.resetAllMocks)

  it('renders the component', () => {
    view()
    expect(screen.getByTestId('Drawer')).toBeInTheDocument()
  })

  it('adds a custom class correctly', () => {
    props.className = 'some-class'
    view()
    expect(screen.getByTestId('Drawer')).toHaveClass('some-class')
  })

  it('does not render the component when open is false', () => {
    props.open = false
    view()
    expect(screen.queryByTestId('Drawer')).not.toBeInTheDocument()
  })

  it('calls `onClose` when close icon is clicked', () => {
    view()
    fireEvent.click(screen.getByRole('button'))
    expect(props.onClose).toBeCalled()
  })

  it('calls `onClose` when backdrop is clicked', async () => {
    view()
    fireEvent.click(document.querySelector('[class*=MuiBackdrop-root]')!)
    expect(props.onClose).toBeCalled()
  })

  it('renders a close button`', () => {
    view()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
