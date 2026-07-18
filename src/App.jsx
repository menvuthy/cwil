import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NewsArticle from "./pages/NewsArticle";

import FloodModeling from "./pages/Research/FloodModeling";
import WaterInfrastructure from "./pages/Research/WaterInfrastructure";
import WaterSource from "./pages/Research/WaterSource";
import Hydropower from "./pages/Research/Hydropower";
import ClimateChange from "./pages/Research/ClimateChange";
import RemoteSensing from "./pages/Research/RemoteSensing";
import AIDataScience from "./pages/Research/AIDataScience";
import GeospatialAnalysis from "./pages/Research/GeospatialAnalysis";

import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <main className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Sub-menu in Research */}
        <Route path="/Research/flood-modeling" element={<FloodModeling />} />
        <Route
          path="/Research/water-infrastructure"
          element={<WaterInfrastructure />}
        />
        <Route path="/Research/water-source" element={<WaterSource />} />
        <Route path="/Research/hydropower" element={<Hydropower />} />
        <Route path="/Research/climate-change" element={<ClimateChange />} />
        <Route path="/Research/remote-sensing" element={<RemoteSensing />} />
        <Route path="/Research/data-science" element={<AIDataScience />} />
        <Route path="/Research/geospatial" element={<GeospatialAnalysis />} />

        {/* Project card */}
        <Route path="/Projects/:slug" element={<ProjectDetail />} />

        {/* News article */}
        <Route path="/News/:slug" element={<NewsArticle />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
