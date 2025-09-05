interface Props {
  Title: string;
  Image: string;
  Rating: number;
  Price: number;
}

function ProductCard({ Title, Image, Rating, Price }: Props) {
  return (
    <>
      <div className="ProductCard">
        <h1>{Title}</h1>
        <img src={Image} alt="an image" width={200}></img>
        <h3>${Price}</h3>

        <h3>{"⭐".repeat(Rating)} </h3>
      </div>
    </>
  );
}

export default ProductCard;
