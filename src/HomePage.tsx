import "./HomePage.css";
import Navbar from "./components/NavBarFolder/Navbar";
import Cartpage from "./components/CartPage";
import Profilepage from "./components/ProfilePage";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


function HomePage() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/Cart" element={<Cartpage />}></Route>
        <Route path="/Profile" element={<Profilepage />}></Route>
      </Routes>
    </Router>

  );
}

export default HomePage;