import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <div>
      <h3>Showing Product with id #{id}</h3>
    </div>
  );
}

export default ProductPage;
