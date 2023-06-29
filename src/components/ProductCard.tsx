// create in React with typescript a Product card component which recieves a product as a prop using tailwind css

import { Product } from '../types/typesProduct';


const ProductCard = ({ product }: {
  product: Product
}) => {

  return (
    <div className="flex flex-col items-center justify-start w-full p-8 bg-white rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-32 h-32" />
      <h1 className="mt-4 text-xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="mt-2 text-gray-600">{product.price}</p>
    </div>
  );
}

export default ProductCard;


