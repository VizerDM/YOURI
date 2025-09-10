//Imports  --- Imgs
import TshirtImg from "../assets/TshirtMockUp.png";
import JeanImg from "../assets/Jean.png";
import ShirtImg from "../assets/Shirt.png";
import GraphTshirtImg from "../assets/GraphicTshirt.png";

//Imports --- Comps
import ProductCard from "./ProductCard";

//Imports --- Misc
import "./Productslider.css";

function ProductSlider() {
  const Products = [
    {
      Title: "Shirt",
      Image: ShirtImg,
      Price: 150,
      Rating: 3,
    },
    {
      Title: "Graphic T-Shirt",
      Image: GraphTshirtImg,
      Price: 169.99,
      Rating: 5,
    },
    {
      Title: "Jean",
      Image: JeanImg,
      Price: 120,
      Rating: 3,
    },
    {
      Title: "T-shirt",
      Image: TshirtImg,
      Price: 60,
      Rating: 4,
    },
  ];
  const onClickHandler = () => {
    console.log("Welcome to the Product Page");
  };
  return (
    <>
      <div className="product-slider">
        {Products.map((Product) => {
          return (
            <ProductCard
              key={Product.Title}
              Title={Product.Title}
              Image={Product.Image}
              Price={Product.Price}
              Rating={Product.Rating}
              onClick={onClickHandler}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductSlider;
