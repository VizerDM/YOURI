interface Props {
  Title: string;
  Image: string;
}

function ProductCard({ Title, Image }: Props) {
  return (
    <>
      <h1>{Title}</h1>
      <img src={Image} alt="an image"></img>
      <div>ProductCard</div>
    </>
  );
}

export default ProductCard;
