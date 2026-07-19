import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style/ProjectCard.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";

import researchImage from "../../assets/research/field/field_0.png";
import Hero from "../../assets/research/field/field_0.png";
import MigrationMap from "../../assets/research/field/field_0.png";
import ErosionDepositionChart from "../../assets/research/field/field_0.png";

import Gallery1 from "../../assets/research/field/field_0.png";
import Gallery2 from "../../assets/research/field/field_0.png";
import Gallery3 from "../../assets/research/field/field_0.png";
import Gallery4 from "../../assets/research/field/field_0.png";

import MethodologyFigure from "../../assets/research/field/field_0.png";

const PROJECTS = {
  kankai: {
    title:
      "Preparatory / Data Collection Survey for the Promotion of Irrigated Agriculture in Kankai Irrigation Scheme in Nepal",
    thumbnail: "../../assets/research/field/field_0.png",
    country: "Nepal",
  },
};

// Result1
export default function KankaiRiver() {
  const { pathname } = useLocation();
  const shareUrl = `https://cwil.vercel.app${pathname}`;

  const project = PROJECTS.kankai;
  const title = project.title;
  // const thumbnail = project.thumbnail;

  const [selectedImage, setSelectedImage] = useState(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="projs-page">
      {/* HERO BANNER */}
      <section
        className="projs-hero"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="projs-hero-overlay">
          <h2>
            Preparatory / Data Collection Survey for the Promotion of Irrigated
            Agriculture in Kankai Irrigation Scheme in Nepal
          </h2>

          <p>Feb 2026 ~ Feb 2027</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="projs-section">
        <div className="container">
          <div className="projs-overview-grid reveal">
            <div className="projs-overview-content">
              <span className="section-kicker">Project Overview</span>
              {/* <h2>Research & Development</h2> */}
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
            <div className="projs-overview-image">
              {/* <img src={researchImage} alt="Research and Development" /> */}
              <img
                src={researchImage}
                alt="Research and Development"
                onClick={() => setSelectedImage(researchImage)}
                className="clickable-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL */}
      <section className="proj-detail-section reveal">
        <div className="container">
          <div className="proj-detail-layout">
            {/* LEFT SIDEBAR */}
            <aside className="proj-sidebar">
              <h3>Project Summary</h3>

              <div className="summary-grid">
                <div className="summary-row">
                  <span>Country</span>
                  <strong>Nepal</strong>
                </div>

                <div className="summary-row">
                  <span>Period</span>
                  <strong>1988–2025</strong>
                </div>
                <div className="summary-row">
                  <span>Project TYpe</span>
                  <strong>JICA Yen Loan</strong>
                </div>

                <div className="summary-row">
                  <span>Theme</span>
                  <strong>River Morphology</strong>
                </div>
              </div>

              <div className="summary-block">
                <h4>Activities</h4>

                <ul className="summary-list">
                  <li>Remote Sensing Analysis</li>
                  <li>GIS & Spatial Analysis</li>
                  <li>River Morphology Assessment</li>
                  <li>Python-based Processing</li>
                </ul>
              </div>

              <div className="summary-block">
                <h4>Key Outputs</h4>

                <ul className="summary-list">
                  <li>River Extent Maps</li>
                  <li>Erosion and Deposition Assessment</li>
                  <li>Channel Migration Analysis</li>
                  <li>Long-term Change Detection</li>
                </ul>
              </div>
              <div className="share-links">
                <span className="share-label">Share this post:</span>

                <FacebookShareButton url={shareUrl} quote={title}>
                  <FacebookIcon size={36} square />
                </FacebookShareButton>

                <LinkedinShareButton url={shareUrl} title={title}>
                  <LinkedinIcon size={36} square />
                </LinkedinShareButton>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="proj-content">
              <section>
                <h3>Introduction</h3>

                <p>
                  The Kankai River is a highly dynamic river system located in
                  eastern Nepal. The river has experienced significant channel
                  migration, bank erosion, and sediment redistribution over
                  recent decades due to natural hydrological variability and
                  intensive monsoon flooding.
                </p>

                <p>
                  Understanding long-term river behavior is essential for
                  watershed management, infrastructure planning, disaster risk
                  reduction, and sustainable river corridor development.
                </p>
              </section>

              {/* GOALS */}
              <section>
                <h3>Project Goals</h3>

                <p>
                  This study aims to investigate long-term morphological changes
                  of the Kankai River using multi-temporal satellite imagery.
                  Specific objectives include:
                </p>

                <ul>
                  <li>Quantify changes in river extent over time.</li>

                  <li>Assess erosion and deposition dynamics.</li>

                  <li>Identify areas with significant channel migration.</li>

                  <li>Support river corridor management and planning.</li>
                </ul>
              </section>

              {/* METHODOLOGY */}
              <section>
                <h3>Methodology</h3>

                <p>
                  Historical Landsat imagery from 1988 to 2025 was processed to
                  extract annual river extent using the Normalized Difference
                  Water Index (NDWI).
                </p>

                <p>
                  River masks were generated and compared between years to
                  quantify morphological changes. Areas of erosion and
                  deposition were identified through spatial overlay analysis,
                  while long-term channel migration patterns were evaluated
                  using cumulative river extent maps.
                </p>

                <img
                  src={MethodologyFigure}
                  alt=""
                  onClick={() => setSelectedImage(MethodologyFigure)}
                  className="clickable-image"
                />

                <figcaption>
                  Workflow for river extent extraction and morphological change
                  assessment.
                </figcaption>
              </section>

              {/* RESULTS */}
              <section>
                <h3>Key Findings</h3>

                <h4>River Migration Dynamics</h4>

                <p>
                  Analysis of multi-decadal satellite imagery revealed
                  substantial channel migration, particularly within the middle
                  reaches of the study area.
                </p>

                <img
                  src={MigrationMap}
                  alt=""
                  onClick={() => setSelectedImage(MigrationMap)}
                  className="clickable-image"
                />

                <h4>Erosion and Deposition Patterns</h4>

                <p>
                  The river experienced alternating periods of erosion and
                  deposition, indicating highly dynamic geomorphic processes.
                </p>

                <img
                  src={ErosionDepositionChart}
                  alt=""
                  onClick={() => setSelectedImage(ErosionDepositionChart)}
                  className="clickable-image"
                />
              </section>

              {/* GALLERY */}
              <section>
                <h3>Project Gallery</h3>

                <div className="gallery-grid">
                  <img
                    src={Gallery1}
                    alt=""
                    className="clickable-image"
                    onClick={() => setSelectedImage(Gallery1)}
                  />

                  <img
                    src={Gallery2}
                    alt=""
                    className="clickable-image"
                    onClick={() => setSelectedImage(Gallery2)}
                  />

                  <img
                    src={Gallery3}
                    alt=""
                    className="clickable-image"
                    onClick={() => setSelectedImage(Gallery3)}
                  />

                  <img
                    src={Gallery4}
                    alt=""
                    className="clickable-image"
                    onClick={() => setSelectedImage(Gallery4)}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}
