import { useEffect, useState } from "react";
import "./style/HeroSlider.css";
import homeBg from "../assets/home-bg/home-bg-71.jpg";
import homeBg2 from "../assets/home-bg/home-bg-2.png";
import homeBg3 from "../assets/home-bg/home-bg-6.jpg";
import homeBg4 from "../assets/home-bg/home-bg-4.JPG";

const SLIDE_PAUSE_MS = 4000;
const SLIDE_TRANSITION_MS = 850;
const slides = [homeBg, homeBg2, homeBg3, homeBg4];
const loopSlides = [...slides, slides[0]];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const goNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (activeIndex === slides.length) {
      const resetTimer = window.setTimeout(() => {
        setTransitionEnabled(false);
        setActiveIndex(0);

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => setTransitionEnabled(true));
        });
      }, SLIDE_TRANSITION_MS);

      return () => window.clearTimeout(resetTimer);
    }

    const slideTimer = window.setTimeout(() => {
      setActiveIndex((current) => current + 1);
    }, SLIDE_PAUSE_MS);

    return () => window.clearTimeout(slideTimer);
  }, [activeIndex]);

  return (
    <div className="hero-slider">
      <div
        className={`hero-slider-track ${transitionEnabled ? "is-moving" : ""}`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {loopSlides.map((image, index) => (
          <div
            key={index}
            className="hero-slider-slide"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <button className="slider-arrow slider-prev" onClick={goPrev}>
        ❮
      </button>

      <button className="slider-arrow slider-next" onClick={goNext}>
        ❯
      </button>

      <div className="hero-slider-overlay" />
    </div>
  );
}
