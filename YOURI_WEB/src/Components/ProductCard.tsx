interface Props {
  Title: string;
}

function ProductCard({ Title }: Props) {
  return (
    <>
      <h1>{Title}</h1>
      <div>ProductCard</div>
    </>
  );
}

export default ProductCard;
