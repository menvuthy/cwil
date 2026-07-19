import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "./data/projects";
import "./style/Projects.css";

import Hero from "../assets/project/hero-bg.jpg";
import WorldMap from "../assets/project/asia_map.png";

export default function Projects() {
  const [activeCountry, setActiveCountry] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const countries = [
    "All",
    ...new Set(PROJECTS.map((project) => project.country)),
  ];

  const years = ["All", ...new Set(PROJECTS.map((project) => project.year))];

  const filteredProjects = PROJECTS.filter((project) => {
    const countryMatch =
      activeCountry === "All" || project.country === activeCountry;

    const yearMatch = activeYear === "All" || project.year === activeYear;

    const searchMatch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase());

    return countryMatch && yearMatch && searchMatch;
  });

  const groupedProjects = filteredProjects.reduce((groups, project) => {
    if (!groups[project.year]) {
      groups[project.year] = [];
    }

    groups[project.year].push(project);

    return groups;
  }, {});

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
    <main className="projects-page">
      {/* HERO BANNER */}
      <section
        className="projects-hero"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="projects-hero-overlay">
          <h1>Project</h1>

          <p>
            CWIL integrates scientific research, engineering expertise,
            geospatial intelligence, artificial intelligence, and innovative
            technologies to address complex water-related challenges in Cambodia
            and beyond.
          </p>
        </div>
      </section>

      {/* INTERACTIVE MAP + PROJECTS */}
      <section className="projects-map-section">
        <div className="container">
          <div className="projects-section-header reveal">
            <span className="section-kicker">Our Portfolio</span>
            <h2>Projects by Location and Year</h2>
            <p>
              Explore CWIL projects across countries, research themes, and
              years. Each project connects scientific research, engineering
              practice, geospatial analysis, and data-driven water solutions.
            </p>
          </div>

          <div className="projects-map-layout reveal">
            {/* LEFT: MAP */}
            <div className="projects-map-panel">
              <div className="map-header">
                <span>Project Locations</span>
                <button
                  type="button"
                  className={activeCountry === "All" ? "active" : ""}
                  onClick={() => {
                    setActiveCountry("All");
                    setActiveYear("All");
                  }}
                >
                  Show All
                </button>
              </div>

              <div className="world-map">
                <img
                  src={WorldMap}
                  alt="World Map"
                  className="world-map-image"
                />

                {/* markers */}
                <button
                  type="button"
                  className={`map-marker cambodia ${
                    activeCountry === "Cambodia" ? "active" : ""
                  }`}
                  onClick={() => setActiveCountry("Cambodia")}
                  aria-label="Cambodia projects"
                >
                  <span className="marker-dot"></span>
                  <span className="marker-label">Cambodia</span>
                </button>

                <button
                  type="button"
                  className={`map-marker nepal ${
                    activeCountry === "Nepal" ? "active" : ""
                  }`}
                  onClick={() => setActiveCountry("Nepal")}
                  aria-label="Nepal projects"
                >
                  <span className="marker-dot"></span>
                  <span className="marker-label">Nepal</span>
                </button>

                <button
                  type="button"
                  className={`map-marker malaysia ${
                    activeCountry === "Malaysia" ? "active" : ""
                  }`}
                  onClick={() => setActiveCountry("Malaysia")}
                  aria-label="Malaysia projects"
                >
                  <span className="marker-dot"></span>
                  <span className="marker-label">Malaysia</span>
                </button>

                <button
                  type="button"
                  className={`map-marker japan ${
                    activeCountry === "Japan" ? "active" : ""
                  }`}
                  onClick={() => setActiveCountry("Japan")}
                  aria-label="Japan projects"
                >
                  <span className="marker-dot"></span>
                  <span className="marker-label">Japan</span>
                </button>
              </div>
            </div>

            {/* RIGHT: FILTER SUMMARY */}
            <div className="projects-filter-panel">
              <h3>Browse Projects</h3>
              <p>
                Filter projects by country or year to explore CWIL's growing
                research and engineering portfolio.
              </p>

              {/* Search */}
              <div className="filter-group">
                <label className="filter-title">Search Project</label>

                <div className="search-box">
                  <span>🔍</span>

                  <input
                    type="text"
                    className="project-search"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-title">Country</span>
                <div className="filter-buttons">
                  {countries.map((country) => (
                    <button
                      type="button"
                      key={country}
                      className={activeCountry === country ? "active" : ""}
                      onClick={() => setActiveCountry(country)}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-title">Year</span>
                <div className="filter-buttons">
                  {years.map((year) => (
                    <button
                      type="button"
                      key={year}
                      className={activeYear === year ? "active" : ""}
                      onClick={() => setActiveYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <div className="project-count-box">
                <strong>{filteredProjects.length}</strong>
                <span>
                  project{filteredProjects.length > 1 ? "s" : ""} found
                </span>
              </div>
            </div>
          </div>

          <div className="projects-results">
            {Object.keys(groupedProjects)
              .sort((a, b) => b - a)
              .map((year) => (
                <div className="project-year-group" key={year}>
                  <div className="project-year-header">
                    <h3>{year}</h3>
                    <span>{groupedProjects[year].length} project(s)</span>
                  </div>

                  <div className="project-grid">
                    {groupedProjects[year].map((project) => (
                      <article key={project.slug} className="project-card">
                        <Link
                          to={`/Projects/${project.slug}`}
                          className="project-card-image"
                        >
                          <img src={project.image} alt={project.title} />
                        </Link>
                        <Link
                          to={`/Projects/${project.slug}`}
                          className="project-title-link"
                        >
                          <h4>{project.title}</h4>
                        </Link>

                        <div className="project-meta">
                          <span>{project.country}</span>
                          <span>{project.theme}</span>
                          <span>{project.type}</span>
                        </div>

                        <p>{project.desc}</p>

                        {/* <Link
                          to={`/Projects/${project.slug}`}
                          className="project-read-more"
                        >
                          View Project
                          <span>→</span>
                        </Link> */}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
