import './home.css';
import ProductCard from '../../components/ProductCard';
import { useProducts } from './hooks/useProducts';
import Title from '../../components/Title';

const Home: React.FC = () => {
  const { products } = useProducts();
  return (
    <div className='container m-auto'>
      <div className='mt-8 text-center'>
        <Title 
          title="Products"
          tag="h1"
          classnames="text-5xl font-bold text-blue-900"
        />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Home;




