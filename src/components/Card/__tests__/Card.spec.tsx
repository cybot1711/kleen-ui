import React from 'react'
import { render, screen, fireEvent } from '../../../utils/testUtils'
import { Tag, TYPES } from '../../Tag'
import { Card, type CardProps } from '..'

describe('Component:Card', () => {
  let props: CardProps
  const view = () => render(<Card {...props} />)

  beforeEach(() => {
    props = {
      title: 'Card title',
      description: 'Card description',
      tag: <Tag type={TYPES.ON_TRACK} />,
      impactTag: <Tag type={TYPES.IMPACT} />,
    }
  })

  it('renders the component', () => {
    view()
    expect(screen.getByTestId('Card')).toBeInTheDocument()
  })

  it('it renders the title', () => {
    view()
    expect(screen.getByText('Card title')).toBeInTheDocument()
  })

  it('it renders the description', () => {
    view()
    expect(screen.getByText('Card description')).toBeInTheDocument()
  })

  it('it renders the tags', () => {
    view()
    expect(screen.getAllByTestId('Tag')).toHaveLength(3)
    expect(screen.getByText('ON TRACK')).toBeInTheDocument()
    expect(screen.getAllByText('MEDIUM IMPACT')).toHaveLength(2)
  })

  it('it renders learn more when isElectoral', () => {
    props.isElectoral = true
    view()
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })

  it('it calls handleClick when clinking learn more', () => {
    props.isElectoral = true
    props.handleClick = jest.fn()
    view()
    fireEvent.click(screen.getByText('Learn more'))
    expect(props.handleClick).toHaveBeenCalled()
  })
})
