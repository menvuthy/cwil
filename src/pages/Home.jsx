import "./style/Home.css";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import { useEffect } from "react";
import { FEATURED_PROJECTS } from "./data/featured_projects";
import { NEWS } from "./data/articles";
import cwilImage from "../assets/CWIL-logo-whitebg.png";
import sloganImage from "../assets/home-bg/slogan.png";
import purposeImage from "../assets/home-bg/flood_pursat.jpg";

const PROJECTS = [
  {
    title: "Sarawak Hydropower Development Study",
    category: "Recent Studies",
    image: "../assets/home-bg/field/field_0.png",
    desc: "Assessment of reservoir and hydropower development options.",
  },
  {
    title: "Cambodia Flood Risk Assessment",
    category: "Flood",
    image: "../assets/home-bg/field/field_0.png",
    desc: "Flood hazard mapping using remote sensing and hydrological modelling.",
  },
  {
    title: "Kankai Hydropower Basin Analysis",
    category: "Hydropower",
    image: "../assets/home-bg/field/field_0.png",
    desc: "HEC-HMS and GIS-based hydropower planning.",
  },
  {
    title: "Water Supply and Climate Resilience",
    category: "Water Supply",
    image: "../assets/home-bg/field/field_0.png",
    desc: "Analysis of water resources under climate change scenarios.",
  },
];

const latestNews = NEWS.slice(0, 3);

function Home() {
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
        threshold: 0.2,
      },
    );

    reveals.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        {/* <div className="hero-bg" /> */}
        <HeroSlider />
        {/* <div className="hero-accent" />s */}
        {/* <div className="hero-accent2" /> */}
        <div className="container hero-content">
          <h1>
            Advancing Water Solutions for
            <br />
            <span className="hero-highlight">Resilient Communities</span>
          </h1>
          <p>
            <br />
            Cambodia Water Intelligence Lab (CWIL) focuses on applied researches
            and develops science-based and data-driven water solutions to
            address complex challenges in water supply, flood management,
            infrastructure design, hydropower development, and climate change in
            Cambodia and Southeast Asia region.
          </p>
          <div className="hero-btns">
            <Link to="/research" className="btn-primary">
              → Research & Development
            </Link>
            <Link to="/contact" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container stats-inner">
          {[
            ["12+", "Projects Completed"],
            ["8+", "Years of Experience"],
            ["5+", "Research Members"],
            ["5+", "Countries Reached"],
          ].map(([n, l]) => (
            <div key={l} className="stat-item">
              <div className="stat-nums">{n}</div>
              <div className="stat-lbls">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT US */}
      <section className="section about-home">
        <div className="container">
          <div className="about-home-grid">
            {/* LEFT IMAGE */}
            <div className="about-home-image reveal">
              <img src={cwilImage} alt="Cambodia Water Intelligence Lab" />
              {/* <br /> */}
              <img src={sloganImage} alt="Cambodia Water Intelligence Lab" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="about-home-content reveal">
              <h2>Cambodia Water Intelligence Lab</h2>

              <p>
                CWIL is an independent research and engineering laboratory
                dedicated to advancing water solutions through science,
                engineering, artificial intelligence, satellite data, remote
                sensing, and geospatial technologies.
              </p>

              <p>
                We conduct applied research and develop practical solutions in
                flood management, water resources assessment, hydropower
                development, climate change adaptation, satellite-based
                monitoring, and geospatial analytics to support sustainable
                development in Cambodia and beyond the region.
              </p>

              <Link to="/about" className="btn-primary">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="section purpose-home">
        <div className="container">
          <div className="purpose-home-grid">
            {/* LEFT CONTENT */}
            <div className="purpose-home-content reveal">
              <h2>Our Purpose</h2>

              <p>
                We believe that better data leads to better decisions. Our
                purpose is to transform scientific knowledge, engineering
                expertise, and geospatial intelligence into practical solutions
                that improve water security, reduce disaster risk, and support
                sustainable development.
              </p>

              <p>
                Through research, innovation, and collaboration, we contribute
                to help governments, development partners, researchers, and
                communities better understand water-related challenges and
                identify effective, evidence-based solutions.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="purpose-home-image reveal">
              <img src={purposeImage} alt="CWIL Purpose" />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH FIELDs */}
      <section className="research-home section">
        <div className="container">
          <div className="research-two-column">
            {/* LEFT COLUMN */}
            <div className="research-left">
              <span className="section-kicker">Research & Development</span>

              <h2>Advancing Water Solutions Through Science & Innovation</h2>

              <p>
                Cambodia Water Intelligence Lab (CWIL) conducts applied research
                and develops science-based solutions to address complex
                challenges in water resources, flood management, hydropower
                development, climate resilience, and environmental
                sustainability.
              </p>

              <p>
                By integrating hydrological science, engineering, remote
                sensing, geospatial intelligence, artificial intelligence, and
                data analytics, we transform data into actionable knowledge that
                supports evidence-based decision making.
              </p>

              <Link to="/research" className="research-btn">
                Explore Research Fields
              </Link>
            </div>

            {/* RIGHT COLUMN */}
            <div className="research-right">
              <h3>Research Fields</h3>

              <ul className="research-links">
                <li>
                  <Link to="/Research/flood-modeling">
                    <span>01.</span> Flood Modeling & Risk Analysis
                  </Link>
                </li>

                <li>
                  <Link to="/Research/water-infrastructure">
                    <span>02.</span> Water Infrastructure & Drainage
                  </Link>
                </li>

                <li>
                  <Link to="/Research/water-source">
                    <span>03.</span> Water Source Assessment
                  </Link>
                </li>

                <li>
                  <Link to="/Research/hydropower">
                    <span>04.</span> Hydropower & River Analysis
                  </Link>
                </li>

                <li>
                  <Link to="/Research/climate-change">
                    <span>05.</span> Climate Change Impact Assessment
                  </Link>
                </li>

                <li>
                  <Link to="/Research/remote-sensing">
                    <span>06.</span> Remote Sensing & Satellite Observation
                  </Link>
                </li>

                <li>
                  <Link to="/Research/data-science">
                    <span>07.</span> AI & Data Science for Water
                  </Link>
                </li>

                <li>
                  <Link to="/Research/geospatial">
                    <span>08.</span> Geospatial Analysis & Software Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="section news-section">
        <div className="container">
          <div className="section-header">
            <h2>News & Updates</h2>

            <p>
              Latest announcements, research activities, and updates from CWIL.
            </p>
          </div>

          <div className="news-grid">
            {latestNews.map((item) => (
              <div key={item.id} className="news-card reveal">
                <img src={item.image} alt={item.title} />

                <div className="news-content">
                  <span className="news-date">{item.date}</span>

                  <h3>{item.title}</h3>

                  <p>{item.summary}</p>

                  <Link to="/news" className="news-link">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/news" className="btn-outline">
              View All News →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-projects section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>

            <p>
              Selected studies and engineering solutions across hydrology, water
              resources, flood management, hydropower and geospatial analytics.
            </p>
          </div>

          <div className="featured-grid">
            {FEATURED_PROJECTS.map((project) => (
              <div key={project.id} className="featured-card reveal">
                <img src={project.image} alt={project.title} />

                <div className="featured-overlay">
                  <span className="project-tag">{project.category}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-btn"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn-primary">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-banner reveal">
        <div className="contact-banner-overlay">
          <h2>Let's Advance Water Solutions Together</h2>

          <p>
            CWIL collaborates with researchers, government agencies, development
            partners, and industry to deliver science-based and data-driven
            solutions for water resources, flood management, hydropower, climate
            resilience, and geospatial intelligence.
          </p>

          <div className="contact-meta">
            <div className="contact-item">
              <span>✉</span>

              <a href="mailto:info@cwil.org" className="contact-email">
                info@cwil.org
              </a>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>

          <Link to="/Contact" className="contact-banner-btn">
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
