import { Link } from 'react-router-dom';

import Product from '@/types/Product';

import useFetch from '@/hooks/useFetch';

import './List.scoped.scss';

function List() {
  const { data, loading } = useFetch<Product[]>('https://fakestoreapi.com/products');

  return (
    <>
      <h2>Products</h2>
      {loading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <span className="title">{product.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default List;
