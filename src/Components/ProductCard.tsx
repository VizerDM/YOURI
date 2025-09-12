//Imports --- Misc
import "./ProductCard.css";

//Props
interface Props {
  Title: string;
  Image: string;
  Rating: number;
  Price: number;
  onClick: () => void;
}

function ProductCard({ Title, Image, Rating, Price, onClick }: Props) {
  return (
    <>
      <div className="product-card" onClick={onClick}>
        <img src={Image} alt="an image" width={200} height={225}></img>
        <div className="product-info">
          <h2 id="title">{Title}</h2>
          <div className="rating-box">
            <h3 id="rating">{"⭐".repeat(Rating)} </h3>
            <h4>{Rating}/5</h4>
          </div>
          <h3 id="price">${Price}</h3>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
