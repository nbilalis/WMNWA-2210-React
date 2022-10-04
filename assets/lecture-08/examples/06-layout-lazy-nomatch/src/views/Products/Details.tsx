import { useNavigate, useParams } from 'react-router-dom';

import useFetch from '@/hooks/useFetch';

import Product from '@/types/Product';

import './Details.scoped.scss';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data && (
        <>
          <h2>{data.title}</h2>
          <h3>{data.category}</h3>
          <p>{data.description}</p>
          <img src={data?.image} alt={data?.title} />
          <p>
            ⭐{data.rating.rate} ({data.rating.count}) - €{data.price}
          </p>
          <p>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              « Back to products
            </button>
          </p>
        </>
      )}
    </>
  );
}

export default Details;
