import React from 'react'
import { render, screen } from '../../../utils/testUtils'

import Page, { type PageProps } from '..'
import theme from '../../../theme'

describe('Component:Page', () => {
  let props: PageProps
  const view = () => render(<Page {...props} />)

  beforeEach(() => {
    props = {
      children: <div>Page contents</div>,
    }
  })

  it('renders the component', () => {
    view()
    expect(screen.getByTestId('Page')).toBeInTheDocument()
  })

  it('adds a custom class correctly', () => {
    props.className = 'some-class'
    view()
    expect(screen.getByTestId('Page')).toHaveClass('some-class')
  })

  it('renders page content', () => {
    view()
    expect(screen.getByText('Page contents')).toBeInTheDocument()
  })

  it('should have the correct background colour', () => {
    view()
    expect(screen.getByTestId('Page')).toHaveStyle(`backgroundColor: ${theme.palette.gallery}`)
  })

  it('sets a max content width when maxWidth is set', () => {
    props.maxWidth = true
    view()
    expect(screen.getByTestId('PageContent')).toBeInTheDocument()
    expect(screen.getByText('Page contents')).toBeInTheDocument()
  })

  it('sets a max width according to supplied value', () => {
    props.maxWidth = 100
    view()
    expect(screen.getByTestId('PageContent')).toHaveStyle('max-width: 100px')
    expect(screen.getByText('Page contents')).toBeInTheDocument()
  })
})
