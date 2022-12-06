import { Link } from 'react-router-dom';

import './List.scoped.scss';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

function List() {
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
