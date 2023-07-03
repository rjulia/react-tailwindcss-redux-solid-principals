import { useParams } from 'react-router-dom'
import { useProduct } from './hooks/useProduct.ts'
import Loading from '../../components/Loading/Loading.tsx'
import Title from '../../components/Title/Title.tsx'

function Product() {
  const { product, loading } = useProduct()
  console.log('🚀 ~ file: Product.tsx:7 ~ Product ~ product:', product)

  const params = useParams()
  console.log(params)

  if (loading) {
    return <Loading />
  }
  return (
    <div className='container h-full'>
      <div className="flex flex-col w-full py-10">
        <div className='grid grid-cols-4 gap-10'>
          <div className=''>
            <img src={product.image} alt={product.title} className="w-full h-auto" />
          </div>
          <div className='col-span-3'>
            <div className="mt-4 text-xl font-bold text-primary-dark hover:text-primary-light">
              <Title
                tag="h1"
                title={product.title}
                classnames="text-5xl font-bold text-primary-dark hover:text-primary-light"
              />
            </div>
            <p className="mt-2 text-text">{product.description}</p>
            <div className='flex items-center justify-between w-full mt-4'>
              <p className="mt-2 text-gray-600"></p>
              <button className="px-4 py-2 mt-4 text-white bg-primary rounded-lg">Add to cart</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product
