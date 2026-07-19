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

          <div className="footer-col footer-rd">
            <h4>Research & Development</h4>
            <ul className="research-list">
              <li>
                <Link to="/Research/flood-modeling">
                  Flood Modeling &amp; Risk Analysis
                </Link>
              </li>
              <li>
                <Link to="/Research/water-infrastructure">
                  Water Infrastructure &amp; Drainage
                </Link>
              </li>
              <li>
                <Link to="/Research/water-source">Water Source Assessemnt</Link>
              </li>
              <li>
                <Link to="/Research/hydropower">
                  Hydropower &amp; River Analysis
                </Link>
              </li>
              <li>
                <Link to="/Research/climate-change">
                  Climate Change Impact Assessment
                </Link>
              </li>
              <li>
                <Link to="/Research/remote-sensing">
                  Remote Sensing &amp; Satellite Observation
                </Link>
              </li>
              <li>
                <Link to="/Research/data-science">AI &amp; Data Science</Link>
              </li>
              <li>
                <Link to="/Research/geospatial">
                  Geospatial Analysis &amp; Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* About CWIL */}
          <div className="footer-col footer-about">
            <h4>About CWIL</h4>
            <ul>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Research">Research Fields</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/News">News</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Follow CWIL */}
          <div className="footer-col footer-follow">
            <h4>Follow CWIL</h4>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2027 Cambodia Water Intelligence Lab. All rights reserved.</p>
          <p>info@cwil.co.kh</p>
        </div>
      </div>
    </footer>
  );
}
