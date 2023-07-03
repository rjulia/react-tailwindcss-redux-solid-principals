import { Link } from 'react-router-dom'
import { Product } from '../../types/typesProduct.ts'
import Title from '../Title/Title.tsx'

const ProductCard = ({ product }: {
  product: Product
}) => (
  <div className="flex flex-col items-center justify-between w-full p-8 bg-white rounded-lg shadow-lg">
    <div className='flex flex-col justify-start'>
      <div className='flex justify-center my-4'>
        <img src={product.image} alt={product.title} className="w-auto h-32" />
      </div>

      <Link to={`/product/${product.id}`} className="mt-4 text-xl font-bold text-primary-dark hover:text-primary-light">
        <Title
          tag="h2"
          title={product.title}
          classnames="text-xl font-bold text-primary-dark hover:text-primary-light"
        />
      </Link>
      <p className="mt-2 text-text">{product.description}</p>
    </div>
    <div className='flex items-center justify-between w-full mt-4'>
      <p className="mt-2 text-gray-600">{product.price}</p>
      <button className="px-4 py-2 mt-4 text-white bg-primary rounded-lg">Add to cart</button>
    </div>
  </div>
)

export default ProductCard
