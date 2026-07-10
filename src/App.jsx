import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
