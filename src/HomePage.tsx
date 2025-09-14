//Imports
import ProductPage from "./Components/ProductPage";
import ProductSlider from "./Components/ProductSlider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Main Function
function HomePage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductSlider />}></Route>
          <Route path="/Product" element={<ProductPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;
