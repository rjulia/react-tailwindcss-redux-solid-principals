import './home.css'
import ProductCard from '../../components/ProductsCard/ProductCard.tsx'
import { useProducts } from './hooks/useProducts.ts'
import { useFilter } from './hooks/useFilter.ts'
import Title from '../../components/Title/Title.tsx'
import { Product } from '../../types/typesProduct.ts'
import Loading from '../../components/Loading/Loading.tsx'
import SearchBar, { filterProducts } from '../../components/SearchBar/SearchBar.tsx'

const Home = () => {
  const { products, loading } = useProducts()
  const { query, handleSearch } = useFilter()
  return (
    <div className='container m-auto'>
      <div className='mt-8 text-center'>
        <Title
          title="Products"
          tag="h1"
          classnames="text-5xl font-bold text-primary uppercase"
        />
      </div>
      <div>
        <SearchBar
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {filterProducts(products, query).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
