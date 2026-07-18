import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/Field.css";

import Hero from "../../assets/research/hero-banner.png";
import researchImage from "../../assets/research/RnD.jpg";

import fieldImage_1 from "../../assets/research/flood.png";

export default function RemoteSensing() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    reveals.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="field-page">
      {/* HERO BANNER */}
      <section
        className="field-hero"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="field-hero-overlay">
          <h1>Remote Sensing & Satellite Observation</h1>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="field-section">
        <div className="container">
          {/* <div className="research-section-header reveal">
            <span className="section-kicker">What We Do</span>
            <h2>Research & Development</h2>
          </div> */}
          <div className="field-overview-grid reveal">
            <div className="field-overview-content">
              <span className="section-kicker">Research Field</span>
              <h2>Remote Sensing & Satellite Observation</h2>
              <p>
                CWIL integrates scientific research, engineering expertise,
                geospatial intelligence, artificial intelligence, and innovative
                technologies to address complex water-related challenges in
                Cambodia and beyond.
              </p>

              <p>
                We combine hydrological science, environmental engineering,
                satellite observations, geospatial technologies, and data-driven
                approaches to support sustainable development and evidence-based
                decision-making.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="field-overview-image">
              <img src={fieldImage_1} alt="Research and Development" />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH FIELDs */}
      <section className="field-field-section">
        <div className="container">
          <div className="field-section-header reveal">
            <span className="section-kicker">Our Focus</span>
            <h2>Research Fields</h2>
            <p>
              CWIL integrates scientific research, engineering expertise,
              geospatial intelligence, artificial intelligence, and innovative
              technologies to address complex water-related challenges in
              Cambodia and beyond.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
