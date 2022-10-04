import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();

  return <h2>Product details #{id}</h2>;
}
export default Details;
