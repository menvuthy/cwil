import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* <div className="footer-logo-icon">CWIL</div> */}
              <span>Cambodia Water Intelligence Lab</span>
            </div>
            <p>
              A multidisciplinary engineering consultancy delivering precision
              geospatial, hydrological, and environmental solutions to clients
              across the globe.
            </p>
          </div>
          <div className="footer-col">
            <h4>Research & Development</h4>
            <ul>
              <li>
                <Link to="/services">GIS &amp; Geospatial</Link>
              </li>
              <li>
                <Link to="/services">Hydrology</Link>
              </li>
              <li>
                <Link to="/services">Environmental</Link>
              </li>
              <li>
                <Link to="/services">Remote Sensing</Link>
              </li>
              <li>
                <Link to="/services">AI &amp; Data Science</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Research Lab</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/research">Research Fields</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
              <li>
                <a href="#researchgate">ResearchGate</a>
              </li>
              <li>
                <a href="#twitter">Twitter / X</a>
              </li>
              <li>
                <a href="#github">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2027 Cambodia Water Intelligence Lab. All rights reserved.</p>
          <p>info@cwil.co.jp</p>
        </div>
      </div>
    </footer>
  );
}
