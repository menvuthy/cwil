import "./style/Home.css";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import { useEffect } from "react";
import { FEATURED_PROJECTS } from "./data/projects";
import { NEWS } from "./data/news";
import cwilImage from "../assets/CWIL-logo-whitebg.png";
import sloganImage from "../assets/home-bg/slogan.png";
import purposeImage from "../assets/home-bg/purpose.png";
import fieldImage_1 from "../assets/home-bg/field/field_0.png";
import fieldImage_2 from "../assets/home-bg/field/field_2.png";
import fieldImage_3 from "../assets/home-bg/field/field_3.png";
import fieldImage_4 from "../assets/home-bg/field/field_4.png";
import fieldImage_5 from "../assets/home-bg/field/field_5.png";
import fieldImage_6 from "../assets/home-bg/field/field_6.png";
import fieldImage_7 from "../assets/home-bg/field/field_7.png";
import fieldImage_8 from "../assets/home-bg/field/field_9.png";

const RESEARCH = [
  {
    icon: "🌊",
    title: "Flood Modeling & Risk Analysis",
    image: fieldImage_1,
    desc: "Hydrodynamic flood models, hazard maps, and early warning systems for river, urban, and coastal zones.",
  },
  {
    icon: "💧",
    image: fieldImage_2,
    title: "Water Infrastructure & Drainage",
    desc: "Design and assessment of drainage networks, irrigation canals, and flood protection structures.",
  },
  {
    icon: "🔍",
    image: fieldImage_3,
    title: "Water Source Assessment",
    desc: "Comprehensive evaluation of surface water and groundwater availability, quality, and sustainability.",
  },
  {
    icon: "⚡",
    image: fieldImage_4,
    title: "Hydropower & River Analysis",
    desc: "Flow duration curves, energy yield estimation, and environmental flow studies for hydropower development.",
  },
  {
    icon: "🌡️",
    image: fieldImage_5,
    title: "Climate Change Impact Assessment",
    desc: "CMIP6 downscaling and hydrological projections to assess future water availability and flood risk.",
  },
  {
    icon: "🛰️",
    image: fieldImage_6,
    title: "Remote Sensing & Satellite Observation",
    desc: "Land cover classification, flood mapping, and vegetation health monitoring using satellite and UAV data.",
  },
  {
    icon: "🤖",
    image: fieldImage_7,
    title: "AI & Data Science for Water",
    desc: "Machine learning streamflow prediction, anomaly detection, and data-driven early warning systems.",
  },
  {
    icon: "🗺️",
    image: fieldImage_8,
    title: "Geospatial Analysis & Software Dev",
    desc: "Custom GIS pipelines, interactive web mapping portals, and spatial database solutions.",
  },
];

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
              <h2>Cambodia Water Intelligence Lab (CWIL)</h2>

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
      <section className="section">
        <div className="container">
          <div className="section-header">
            {/* <span className="section-tag">What We Do</span> */}
            <h2>Research Fields</h2>
            <p>
              We combine advanced spatial technology with deep environmental
              expertise to deliver actionable insights and engineering
              solutions.
            </p>
          </div>
          <div className="research-grid">
            {RESEARCH.map((s) => (
              <div key={s.title} className="research-card">
                <img src={s.image} alt={s.title} />
                <div className="research-overlay">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/research" className="btn-primary">
              View All Fields →
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="news-section section">
        <div className="container">
          <div className="section-header">
            <h2>News & Updates</h2>

            <p>
              Latest announcements, research activities, and updates from CWIL.
            </p>
          </div>

          <div className="news-grid">
            {NEWS.map((item) => (
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

                  <Link to={`/projects/${project.id}`} className="project-btn">
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

          <Link to="/contact" className="contact-banner-btn">
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
