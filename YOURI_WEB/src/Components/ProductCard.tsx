//Imports --- Misc
import "./ProductCard.css";

//Props
interface Props {
  Title: string;
  Image: string;
  Rating: number;
  Price: number;
}

function ProductCard({ Title, Image, Rating, Price }: Props) {
  return (
    <>
      <div className="product-card">
        <img src={Image} alt="an image" width={200} height={225}></img>
        <div className="product-info">
          <h2>{Title}</h2>
          <h3>${Price}</h3>
        </div>
        <h3 id="rating">{"⭐".repeat(Rating)} </h3>
      </div>
    </>
  );
}

export default ProductCard;
