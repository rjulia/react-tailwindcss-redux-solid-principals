import { useParams } from 'react-router-dom'

function Product() {
  const params = useParams()
  return <h2>This is a page for product with ID: {params.id} </h2>
}

export default Product
