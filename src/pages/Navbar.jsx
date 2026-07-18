import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style/Navbar.css";
import logo from "../assets/CWIL-logo-whitebg.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setResearchOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          {/* <div className="nav-logo-icon">CWIL</div> */}
          <img
            src={logo}
            alt="Cambodia Water Intelligence Lab"
            className="nav-logo-image"
          />
          <span className="nav-logo-text">Cambodia Water Intelligence Lab</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          {/* DESKTOP */}
          <div className="nav-dropdown desktop-dropdown">
            <NavLink
              to="/Research"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Research
            </NavLink>

            <div className="dropdown-menu">
              <Link to="/Research/flood-modeling">
                Flood Modeling & Risk Analysis
              </Link>

              <Link to="/Research/water-infrastructure">
                Water Infrastructure & Drainage
              </Link>

              <Link to="/Research/water-source">Water Source Assessment</Link>

              <Link to="/Research/hydropower">Hydropower & River Analysis</Link>

              <Link to="/Research/climate-change">
                Climate Change Impact Assessment
              </Link>

              <Link to="/Research/remote-sensing">
                Remote Sensing & Satellite Observation
              </Link>

              <Link to="/Research/data-science">
                AI & Data Science for Water
              </Link>

              <Link to="/Research/geospatial">
                Geospatial Analysis & Software Development
              </Link>
            </div>
          </div>

          {/* MOBILE */}
          <div
            className={`nav-dropdown mobile-dropdown ${
              researchOpen ? "open" : ""
            }`}
          >
            <div className="mobile-dropdown-row">
              <NavLink
                to="/Research"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mobile-research-link ${isActive ? "active" : ""}`
                }
              >
                Research
              </NavLink>

              <button
                type="button"
                className="mobile-arrow-btn"
                onClick={() => setResearchOpen(!researchOpen)}
                aria-label="Toggle research submenu"
              >
                ▼
              </button>
            </div>

            <div className="dropdown-menu">
              <Link to="/Research/flood-modeling" onClick={closeMenu}>
                Flood Modeling & Risk Analysis
              </Link>

              <Link to="/Research/water-infrastructure" onClick={closeMenu}>
                Water Infrastructure & Drainage
              </Link>

              <Link to="/Research/water-source" onClick={closeMenu}>
                Water Source Assessment
              </Link>
              <Link to="/Research/hydropower" onClick={closeMenu}>
                Hydropower & River Analysis
              </Link>

              <Link to="/Research/climate-change" onClick={closeMenu}>
                Climate Change Impact Assessment
              </Link>

              <Link to="/Research/remote-sensing" onClick={closeMenu}>
                Remote Sensing & Satellite Observation
              </Link>

              <Link to="/Research/data-science" onClick={closeMenu}>
                AI & Data Science for Water
              </Link>

              <Link to="/Research/geospatial" onClick={closeMenu}>
                Geospatial Analysis & Software Development
              </Link>
            </div>
          </div>

          <NavLink
            to="/Projects"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/News"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            News
          </NavLink>
          <NavLink
            to="/Contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-contact active" : "mobile-contact"
            }
          >
            Contact
          </NavLink>
        </div>

        <Link to="/Contact" className="nav-cta">
          Contact
        </Link>
      </div>
    </nav>
  );
}
