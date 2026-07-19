import React, { useEffect } from "react";
import "./style/About.css";

import aboutHero from "../assets/about-us/hero-bg.jpg";

import menPhoto from "../assets/about-us/vuthy.jpg";
import member2Photo from "../assets/about-us/vatey.jpg";
import member3Photo from "../assets/about-us/por-y.jpg";
import member4Photo from "../assets/about-us/hongchhay.jpg";

import videoFile from "../assets/about-us/dsi-intro-video.mp4";
import videoThumbnail from "../assets/about-us/video-thumb.png";

const TEAM_MEMBERS = [
  {
    image: menPhoto,
    name: "Men Vuthy",
    role: "Research Team Leader",
    education: "M.Eng. in Civil Engineering, The University of Tokyo, Japan",
    bio: "Specialized in hydrology, flood analysis, water resources engineering, hydropower planning, GIS, remote sensing, and machine learning applications for water systems.",
  },

  {
    image: member2Photo,
    name: "Thorn Watvatey",
    role: "Research Member",
    education: "M.Eng. in Civil Engineering, The University of Tokyo, Japan",
    bio: "Specialized in hydrology, flood analysis, water resources engineering, hydropower planning, GIS, remote sensing, and machine learning applications for water systems.",
  },

  {
    image: member3Photo,
    name: "Chheng Por Y",
    role: "Research Member",
    education: "M.Eng. in Civil Engineering, The University of Tokyo, Japan",
    bio: "Specialized in hydrology, flood analysis, water resources engineering, hydropower planning, GIS, remote sensing, and machine learning applications for water systems.",
  },

  {
    image: member4Photo,
    name: "Chheng Hongchhay",
    role: "Research Member",
    education: "M.Eng. in Civil Engineering, The University of Tokyo, Japan",
    bio: "Specialized in hydrology, flood analysis, water resources engineering, hydropower planning, GIS, remote sensing, and machine learning applications for water systems.",
  },
];

const VALUES = [
  {
    title: "Scientific Excellence",
    desc: "We apply rigorous methods, transparent analysis, and evidence-based approaches in every research and engineering activity.",
  },
  {
    title: "Innovation",
    desc: "We integrate emerging technologies, geospatial intelligence, artificial intelligence, and modern engineering tools to solve complex water challenges.",
  },
  {
    title: "Collaboration",
    desc: "We work across disciplines and with researchers, institutions, development partners, and communities to create meaningful impact.",
  },
  {
    title: "Sustainable Impact",
    desc: "We aim to transform scientific knowledge into practical solutions that support resilient communities and sustainable development.",
  },
];

export default function About() {
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
    <main className="about-page">
      {/* HERO BANNER */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="about-hero-overlay">
          {/* <span className="about-hero-tag">About CWIL</span> */}
          <h1>About Us</h1>

          <p>
            Learn more about CWIL, Our Team, Our Mission & Vision, and Our
            Values
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section who-section">
        <div className="container">
          <div className="about-section-header reveal">
            <span className="section-kicker">Who We Are</span>

            <h2>Cambodia Water Intelligence Lab</h2>
          </div>

          <div className="who-grid reveal">
            {/* LEFT CONTENT */}
            <div className="who-content">
              {/* <h3>About CWIL</h3> */}

              <p>
                Cambodia Water Intelligence Lab (CWIL) is an independent applied
                research and engineering laboratory dedicated to advancing
                science-based and data-driven water solutions.
              </p>

              <p>
                Our work integrates hydrology, environmental engineering, remote
                sensing, geospatial technologies, and artificial intelligence to
                address complex challenges in water resources, flood management,
                hydropower development, and climate resilience.
              </p>

              <p>
                By combining scientific research with practical engineering
                applications, CWIL contributes to informed decision-making and
                sustainable development in Cambodia and beyond.
              </p>
            </div>

            {/* RIGHT VIDEO */}

            <div className="who-video">
              <video
                controls
                preload="metadata"
                poster={videoThumbnail}
                src={videoFile}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}

      <section className="about-section team-members-section">
        <div className="container">
          <div className="about-section-header reveal">
            <span className="section-kicker">Our People</span>

            <h2>Team Members</h2>

            <p>
              CWIL brings together multidisciplinary expertise in hydrology,
              geospatial technologies, artificial intelligence, remote sensing,
              and water-related engineering.
            </p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <div className="team-card reveal" key={member.name}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />

                <div className="team-content">
                  <h4>{member.name}</h4>

                  <span className="team-role">{member.role}</span>

                  {member.education && (
                    <p className="team-education">{member.education}</p>
                  )}

                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-section mv-section">
        <div className="container">
          <div className="about-section-header reveal">
            <span className="section-kicker">Direction</span>
            <h2>Mission & Vision</h2>
            <p>
              Our mission defines how CWIL works today, while our vision shapes
              the long-term contribution we aim to make in Cambodia and the
              wider region.
            </p>
          </div>

          <div className="mv-grid">
            <div className="mv-card reveal">
              <span className="mv-label">Mission</span>
              <h4>Advancing Water Solutions Through Science</h4>
              <p>
                To advance water solutions through scientific research,
                engineering knowledge, geospatial intelligence, and innovation,
                contributing to resilient communities and sustainable
                development.
              </p>
            </div>

            <div className="mv-card reveal">
              <span className="mv-label">Vision</span>
              <h4>Becoming a Regional Water Intelligence Lab</h4>
              <p>
                To become a leading research and innovation laboratory in
                Southeast Asia, recognized for scientific excellence, practical
                impact, and data-driven solutions in water and environmental
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-section values-section">
        <div className="container">
          <div className="about-section-header reveal">
            <span className="section-kicker">What Guides Us</span>
            <h2>Core Values</h2>
            <p>
              These principles guide how CWIL conducts research, develops
              solutions, and collaborates with partners.
            </p>
          </div>

          <div className="values-grid">
            {VALUES.map((value, index) => (
              <div className="value-card reveal" key={value.title}>
                <span className="value-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
