import "./HomePage.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Brands from "./Components/Brands";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Brands />
      </main>
    </div>
  );
}

export default App;