import { Product } from '../types/typesProduct.ts'

const ProductCard = ({ product }: {
  product: Product
}) => (
  <div className="flex flex-col items-center justify-start w-full p-8 bg-white rounded-lg shadow-lg">
    <img src={product.image} alt={product.name} className="w-32 h-32" />
    <h1 className="mt-4 text-xl font-bold">{product.name}</h1>
    <p className="mt-2 text-gray-600">{product.description}</p>
    <p className="mt-2 text-gray-600">{product.price}</p>
  </div>
)

export default ProductCard
