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
        <img src={Image} alt="an image"></img>
        <h3>${Price}</h3>
        <br></br>
        <h3>Rating: {Rating} stars</h3>
      </div>
    </>
  );
}

export default ProductCard;
