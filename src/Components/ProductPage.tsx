import { useParams } from "react-router-dom";

const Products = [
  {
    Title: "Shirt",

    Price: 150,
    Rating: 3,
    id: 1,
  },
  {
    Title: "Graphic T-Shirt",
    Price: 169.99,
    Rating: 5,
    id: 2,
  },
  {
    Title: "Jean",
    Price: 120,
    Rating: 3,
    id: 3,
  },
  {
    Title: "T-shirt",
    Price: 60,
    Rating: 4,
    id: 4,
  },
];
function ProductPage() {
  const { id } = useParams();

  const product = Products.find((p) => p.id === Number(id));
  const rating = product?.Rating;
  return (
    <>
      <h3>
        {product?.Title}, {product?.Price} $, {product?.id}
      </h3>
      <h4>{"⭐".repeat(Number(rating))} </h4>
    </>
  );
}

export default ProductPage;
