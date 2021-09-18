import { render } from '@testing-library/react'
import Home from './Home'

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('Should display timestamp', () => {})
})