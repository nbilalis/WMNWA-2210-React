import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();

  return <h2>Product Details #{id}</h2>;
}

export default Details;
