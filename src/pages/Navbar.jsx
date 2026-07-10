import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style/Navbar.css";
import logo from "../assets/CWIL-logo-whitebg.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
          <NavLink
            to="/research"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Research
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/news"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            News
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-contact active" : "mobile-contact"
            }
          >
            Contact
          </NavLink>
        </div>

        <Link to="/contact" className="nav-cta">
          Contact
        </Link>
      </div>
    </nav>
  );
}
