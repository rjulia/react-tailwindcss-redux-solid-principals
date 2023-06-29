import './home.css'
import ProductCard from '../../components/ProductCard.tsx'
import { useProducts } from './hooks/useProducts.ts'
import Title from '../../components/Title.tsx'
import { Product } from '../../types/typesProduct.ts'

const Home = () => {
  const { products, loading } = useProducts()
  return (
    <div className='container m-auto'>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary' />
        </div>
      ) : (
        <>
          <div className='mt-8 text-center'>
            <Title
              title="Products"
              tag="h1"
              classnames="text-5xl font-bold text-primary uppercase"
            />
          </div>
          <div className="grid grid-cols-3 gap-8">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Home
