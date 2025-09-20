import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { Button } from '.'

describe('Button', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<Button label='Testing' />)
  })

  it('should render label', () => {
    render(<Button label='Testing' />)
    screen.getByText('Testing')
  })
})
