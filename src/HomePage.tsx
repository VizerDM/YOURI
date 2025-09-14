import "./HomePage.css";
import Navbar from "./components/NavBarFolder/Navbar";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function HomePage() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </Router>

  );
}

export default HomePage;