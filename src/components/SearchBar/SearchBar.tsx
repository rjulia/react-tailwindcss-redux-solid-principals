/* eslint-disable no-use-before-define */
import React from 'react'
import { Product } from '../../types/typesProduct.ts'

export function filterProducts(products: Product[], query: string | undefined) {
  if (!query) {
    return products
  }

  return products.filter((product: any) => {
    const productName = product.title.toLowerCase()
    return productName.includes(query)
  })
}

interface IfilterProps {
  placeholder?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function Searchbar({
  placeholder = 'Search...',
  onChange,
}: IfilterProps) {
  return (
    <div
      role='search'
      className="w-full max-w-[500px] my-4 flex justify-center mx-auto">
      <input
        onChange={(e) => onChange(e)}
        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
        placeholder={placeholder} />
    </div>
  )
}

export default Searchbar
