import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./style/News.css";
import { NEWS } from "./data/articles";

import Hero from "../assets/news/hero-bg.jpg";

export default function News() {
  const featured = NEWS[0];
  const latestNews = NEWS.slice(1);

  const newsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(latestNews.length / newsPerPage);

  const currentNews = latestNews.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage,
  );

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
  }, [currentPage]);

  const updatesRef = useRef(null);
  useEffect(() => {
    if (updatesRef.current && currentPage > 1) {
      const y =
        updatesRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        100; // navbar offset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  return (
    <div className="news-page">
      {/* HERO */}
      <section
        className="news-hero"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="news-hero-overlay">
          {/* <span className="news-hero-tag">CWIL NEWSROOM</span> */}

          <h1>News & Insights</h1>

          <p>
            Research discoveries, project updates, field investigations,
            engineering innovations, and geospatial intelligence from Cambodia
            Water Intelligence Lab.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="news-section">
        <div className="container">
          <div className="featured-card reveal">
            <div className="featured-image">
              <img src={featured.image} alt={featured.title} />
            </div>

            <div className="featured-content">
              <span className="featured-badge">FEATURED STORY</span>

              <div className="news-meta">
                <span>{featured.category}</span>
                <span>•</span>
                <span>{featured.date}</span>
              </div>

              <h2>{featured.title}</h2>

              <p>{featured.summary}</p>

              <Link className="read-more-btn" to={`/News/${featured.slug}`}>
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="news-section light" ref={updatesRef}>
        <div className="container">
          <div className="news-section-header reveal">
            <span className="section-kicker">Latest Updates</span>

            <h2>News & Insights</h2>
            <p>
              Research findings, project milestones, field investigations, and
              technical developments across CWIL activities.
            </p>
          </div>

          <div className="news-grid">
            {currentNews.map((item) => (
              <Link
                key={item.id}
                to={`/News/${item.slug}`}
                className="news-card reveal"
              >
                <img src={item.image} alt={item.title} />

                <div className="news-card-content">
                  <span className="news-category">{item.category}</span>

                  <h3>{item.title}</h3>

                  <p>{item.summary}</p>

                  <div className="news-date">{item.date}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active-page" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="news-section">
        <div className="container">
          <div className="news-section-header reveal">
            <h2>Recent Project Updates</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-date">Jul 2026</div>

              <div className="timeline-content">
                <h4>Kankai River Morphology Study</h4>

                <p>
                  River migration and erosion analysis completed using
                  multi-temporal satellite imagery.
                </p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-date">Jun 2026</div>

              <div className="timeline-content">
                <h4>Sarawak Hydropower Assessment</h4>

                <p>
                  Hydropower screening and preliminary site evaluation
                  finalized.
                </p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-date">May 2026</div>

              <div className="timeline-content">
                <h4>Flood Risk Mapping Research</h4>

                <p>
                  Development of flood hazard maps using remote sensing and
                  AI-based techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
