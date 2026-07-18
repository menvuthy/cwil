import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/Research.css";

import Hero from "../assets/research/hero-banner.png";
import researchImage from "../assets/research/RnD.jpg";

import fieldImage_1 from "../assets/research/field/field_0.png";
import fieldImage_2 from "../assets/research/field/field_2.png";
import fieldImage_3 from "../assets/research/field/field_3.png";
import fieldImage_4 from "../assets/research/field/field_4.png";
import fieldImage_5 from "../assets/research/field/field_5.png";
import fieldImage_6 from "../assets/research/field/field_6.png";
import fieldImage_7 from "../assets/research/field/field_7.png";
import fieldImage_8 from "../assets/research/field/field_9.png";

const RESEARCH = [
  {
    slug: "flood-modeling",
    title: "Flood Modeling & Risk Analysis",
    image: fieldImage_1,
    desc: "Hydrodynamic flood models, hazard maps, and early warning systems for river, urban, and coastal zones.",
  },
  {
    slug: "water-infrastructure",
    image: fieldImage_2,
    title: "Water Infrastructure & Drainage",
    desc: "Design and assessment of drainage networks, irrigation canals, and flood protection structures.",
  },
  {
    slug: "water-source",
    image: fieldImage_3,
    title: "Water Source Assessment",
    desc: "Comprehensive evaluation of surface water and groundwater availability, quality, and sustainability.",
  },
  {
    slug: "hydropower",
    image: fieldImage_4,
    title: "Hydropower & River Analysis",
    desc: "Flow duration curves, energy yield estimation, and environmental flow studies for hydropower development.",
  },
  {
    slug: "climate-change",
    image: fieldImage_5,
    title: "Climate Change Impact Assessment",
    desc: "CMIP6 downscaling and hydrological projections to assess future water availability and flood risk.",
  },
  {
    slug: "remote-sensing",
    image: fieldImage_6,
    title: "Remote Sensing & Satellite Observation",
    desc: "Land cover classification, flood mapping, and vegetation health monitoring using satellite and UAV data.",
  },
  {
    slug: "data-science",
    image: fieldImage_7,
    title: "AI & Data Science for Water",
    desc: "Machine learning streamflow prediction, anomaly detection, and data-driven early warning systems.",
  },
  {
    slug: "geospatial",
    image: fieldImage_8,
    title: "Geospatial Analysis & Software Development",
    desc: "Custom GIS pipelines, interactive web mapping portals, and spatial database solutions.",
  },
];

export default function Research() {
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
    <main className="research-page">
      {/* HERO BANNER */}
      <section
        className="research-hero"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="research-hero-overlay">
          <h1>Research</h1>

          <p>
            CWIL integrates scientific research, engineering expertise,
            geospatial intelligence, artificial intelligence, and innovative
            technologies to address complex water-related challenges in Cambodia
            and beyond.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="research-section">
        <div className="container">
          <div className="research-overview-grid reveal">
            <div className="research-overview-content">
              <span className="section-kicker">What We Do</span>
              <h2>Research & Development</h2>
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
            <div className="research-overview-image">
              <img src={researchImage} alt="Research and Development" />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH FIELDs */}
      <section className="research-fields-section">
        <div className="container">
          <div className="research-section-header reveal">
            <span className="section-kicker">Our Focus</span>
            <h2>Research Fields</h2>
            <p>
              CWIL integrates scientific research, engineering expertise,
              geospatial intelligence, artificial intelligence, and innovative
              technologies to address complex water-related challenges in
              Cambodia and beyond.
            </p>
          </div>

          <div className="fields-grid">
            {RESEARCH.map((field) => (
              <div key={field.title} className="fields-card reveal">
                <Link
                  to={`/Research/${field.slug}`}
                  className="fields-card-image"
                >
                  <img src={field.image} alt={field.title} />
                </Link>

                <Link
                  to={`/Research/${field.slug}`}
                  className="fields-title-link"
                >
                  <h4>{field.title}</h4>
                </Link>

                <p>{field.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
