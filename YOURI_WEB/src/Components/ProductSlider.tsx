//Imports  --- Imgs
import JacketImg from "../assets/JacketMockUp.jpeg";
import HoodieImg from "../assets/HoodieMockUp.jpg";
import TshirtImg from "../assets/TshirtMockUp.jpeg";
//Imports --- Comps
import ProductCard from "./ProductCard";

//Imports --- Misc
import "./Productslider.css";

function ProductSlider() {
  const Products = [
    {
      Title: "Jacket",
      Image: JacketImg,
      Price: 40,
      Rating: 4,
    },
    {
      Title: "Hoodie",
      Image: HoodieImg,
      Price: 60,
      Rating: 5,
    },
    {
      Title: "Tshirt",
      Image: TshirtImg,
      Price: 60,
      Rating: 5,
    },
  ];
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
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductSlider;
