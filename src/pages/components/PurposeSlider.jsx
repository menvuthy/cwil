import { useEffect, useState } from "react";

import img1 from "../../assets/home-bg/purpose/satelltie_rain.jpg";
import img2 from "../../assets/home-bg/purpose/data.png";
import img3 from "../../assets/home-bg/purpose/flood_map.png";
import img4 from "../../assets/home-bg/purpose/flood_pursat.jpg";

import "../style/PurposeSlider.css";

const slides = [img1, img2, img3, img4];

export default function PurposeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="purpose-slider">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt=""
          className={
            index === current ? "purpose-slide active" : "purpose-slide"
          }
        />
      ))}
    </div>
  );
}
