/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Title from '../Title.tsx'

describe('Title', () => {
  it('should render same text passed into title prop', async () => {
    render(
      <Title
        tag="h1"
        title="todo"
      />,
    )
    const h1Element = await screen.findByText(/todo/i)
    expect(h1Element).toBeInTheDocument()
  })
  it('should render tag h2 pass as props', async () => {
    render(
      <Title
        tag="h2"
        title="todo"
      />,
    )
    const h2Element = await screen.findByText(/todo/i)
    expect(h2Element.tagName).toBe('H2')
  })
})
