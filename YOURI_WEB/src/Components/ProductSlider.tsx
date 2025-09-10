//Imports  --- Imgs
import TshirtImg from "../assets/TshirtMockUp.png";
import JeanImg from "../assets/Jean.png";
import ShirtImg from "../assets/Shirt.png";
import GraphTshirtImg from "../assets/GraphicTshirt.png";

//Imports --- Comps
import ProductCard from "./ProductCard";

//Imports --- Misc
import "./Productslider.css";
import RedirectButton from "./RedirectButton";

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
  const onClickHandler1 = () => {
    console.log("Welcome to the Product Page");
  };
  const onClickHandler2 = () => {
    console.log("Welcome to the Category Page");
  };
  return (
    <>
      <div className="main-product-slider">
        <div className="sub-product-slider">
          {Products.map((Product) => {
            return (
              <>
                <ProductCard
                  key={Product.Title}
                  Title={Product.Title}
                  Image={Product.Image}
                  Price={Product.Price}
                  Rating={Product.Rating}
                  onClick={onClickHandler1}
                />
              </>
            );
          })}
        </div>
        <RedirectButton Title="View All" onClick={onClickHandler2} />
      </div>
    </>
  );
}

export default ProductSlider;
