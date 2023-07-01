/* eslint-disable no-undef */

import { render, screen, within } from '@testing-library/react'
import SearchBar, { filterProducts } from '../SearchBar.tsx'

const products = [
  {
    id: 1,
    title: 'Producto 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quas.',
    image: 'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg',
    price: 20,
  },
  {
    id: 2,
    title: 'Producto 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quas.',
    image: 'https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg',
    price: 20,
  },
]

describe('SearchBar', () => {
  // searchbar has a div to wrap input
  it('should render input with placeholder', () => {
    render(<SearchBar placeholder="Search..." onChange={() => null} />)
    const inputNode = screen.getByRole('search')
    const placeholderNode = within(inputNode).getByPlaceholderText('Search...')
    const placeholder = placeholderNode.getAttribute('placeholder')
    expect(placeholder).toBe('Search...')
  })

  it('should filter products', () => {
    const query = 'producto 1'
    const filteredProducts = filterProducts(products, query)
    expect(filteredProducts).toHaveLength(1)
  })

  it('should filter products with no query', () => {
    const query = ''
    const filteredProducts = filterProducts(products, query)
    expect(filteredProducts).toHaveLength(2)
  })

  it('should filter products with no products', () => {
    const query = ''
    const filteredProducts = filterProducts([], query)
    expect(filteredProducts).toHaveLength(0)
  })

  it('should filter products with no products and no query', () => {
    const query = ''
    const filteredProducts = filterProducts([], query)
    expect(filteredProducts).toHaveLength(0)
  })

  it('should filter products with no products and query', () => {
    const query = 'producto 1'
    const filteredProducts = filterProducts([], query)
    expect(filteredProducts).toHaveLength(0)
  })

  it('should filter products with no products and query', () => {
    const query = 'producto 1'
    const filteredProducts = filterProducts([], query)
    expect(filteredProducts).toHaveLength(0)
  })
})
