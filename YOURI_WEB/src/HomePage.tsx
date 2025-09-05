//Components
import ProductCard from "./Components/ProductCard";
import JacketMock from "./assets/JacketMockUp.jpeg";

//Main Function
function HomePage() {
  return (
    <>
      <ProductCard
        Title="Latest Products"
        Image={JacketMock}
        Price={25}
        Rating={4}
      />
    </>
  );
}

export default HomePage;
