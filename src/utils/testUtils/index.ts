import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestWrapper from './TestWrapper/TestWrapper'
import type { ReactElement, JSXElementConstructor } from 'react'

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: RenderOptions<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >,
  wrapper = TestWrapper,
) => render(ui, { wrapper, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
