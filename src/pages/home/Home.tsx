import './home.css'
import ProductCard from '../../components/ProductCard.tsx'
import { useProducts } from './hooks/useProducts.ts'
import Title from '../../components/Ttitle/Title.tsx'
import { Product } from '../../types/typesProduct.ts'
import Loading from '../../components/Loading.tsx'

const Home = () => {
  const { products, loading } = useProducts()
  return (
    <div className='container m-auto'>
      {loading ? (
        <Loading />
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
