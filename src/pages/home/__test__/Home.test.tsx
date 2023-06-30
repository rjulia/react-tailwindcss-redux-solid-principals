/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import App from '../Home.tsx'

test('should render title products', async () => {
  render(<App />)
  const linkElement = await screen.findByText(/products/i)
  expect(linkElement).toBeInTheDocument()
})
