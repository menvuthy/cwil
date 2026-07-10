import React, { useState } from "react";
import HeroBanner from "../pages/HeroBanner";
import "./style/About.css";

const SECTIONS = [
  { id: "who", icon: "🏢", label: "Who we are" },
  { id: "purpose", icon: "🎯", label: "Our purpose" },
  { id: "mission", icon: "🚩", label: "Mission" },
  { id: "vision", icon: "👁️", label: "Vision" },
  { id: "team", icon: "👥", label: "Team members" },
];

const TEAM = [
  {
    initials: "DR",
    name: "Dr. David Reeves",
    role: "CEO & Lead Hydrologist",
    dept: "Hydrology",
  },
  {
    initials: "AK",
    name: "Amara Kouyaté",
    role: "Head of GIS & Remote Sensing",
    dept: "Geospatial",
  },
  {
    initials: "YT",
    name: "Yuki Tanaka",
    role: "Environmental Science Director",
    dept: "Environmental",
  },
  {
    initials: "MH",
    name: "Marco Hernandez",
    role: "Senior Watershed Engineer",
    dept: "Hydrology",
  },
  {
    initials: "SB",
    name: "Sonia Bergmann",
    role: "Remote Sensing Specialist",
    dept: "Geospatial",
  },
  {
    initials: "PR",
    name: "Phearak Ros",
    role: "GIS Analyst & Field Lead",
    dept: "Geospatial",
  },
  {
    initials: "NP",
    name: "Naledi Phiri",
    role: "Environmental Impact Assessor",
    dept: "Environmental",
  },
  {
    initials: "RK",
    name: "Rahul Krishnan",
    role: "Hydrology Modeller",
    dept: "Hydrology",
  },
];

export default function About() {
  const [active, setActive] = useState("who");

  return (
    <div className="about-page">
      <HeroBanner
        title="About"
        titleAccent="CWIL"
        subtitle="Precision-driven geospatial, hydrological, and environmental engineering — trusted by governments, NGOs, and private sector clients across 25+ countries."
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* TAB NAV */}
      <div className="about-tab-nav">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`about-tab ${active === s.id ? "on" : ""}`}
            onClick={() => setActive(s.id)}
          >
            <span className="tab-icon">{s.icon}</span> {s.label}
          </button>
        ))}
      </div>

      <div className="about-body">
        {/* SIDEBAR */}
        <aside className="about-sidebar">
          <div className="sb-group-label">About us</div>
          {SECTIONS.slice(0, 2).map((s) => (
            <button
              key={s.id}
              className={`sb-item ${active === s.id ? "on" : ""}`}
              onClick={() => setActive(s.id)}
            >
              <span>{s.icon}</span> {s.label}
            </button>
          ))}
          <div className="sb-divider" />
          <div className="sb-group-label">Company</div>
          {SECTIONS.slice(2, 4).map((s) => (
            <button
              key={s.id}
              className={`sb-item ${active === s.id ? "on" : ""}`}
              onClick={() => setActive(s.id)}
            >
              <span>{s.icon}</span> {s.label}
            </button>
          ))}
          <div className="sb-divider" />
          <div className="sb-group-label">People</div>
          {SECTIONS.slice(4).map((s) => (
            <button
              key={s.id}
              className={`sb-item ${active === s.id ? "on" : ""}`}
              onClick={() => setActive(s.id)}
            >
              <span>{s.icon}</span> {s.label}
            </button>
          ))}
        </aside>

        {/* PANELS */}
        <main className="about-main">
          {active === "who" && (
            <div className="panel">
              <span className="section-tag">Introduction</span>
              <h2>Who we are</h2>
              <p>
                Exomac Engineering is a multidisciplinary consultancy founded in
                2007, specializing in GIS & geospatial analysis, hydrology,
                environmental engineering, and remote sensing. We work at the
                intersection of spatial data science and real-world engineering
                to deliver solutions that are scientifically rigorous and
                practically impactful.
              </p>
              <div className="wwa-stats">
                {[
                  ["18+", "Years of experience"],
                  ["150+", "Projects completed"],
                  ["40+", "Expert engineers"],
                  ["25+", "Countries served"],
                ].map(([n, l]) => (
                  <div key={l} className="wwa-stat">
                    <div className="wwa-num">{n}</div>
                    <div className="wwa-lbl">{l}</div>
                  </div>
                ))}
              </div>
              <ul className="feature-list">
                {[
                  "ISO 9001:2015 certified quality management system across all project types",
                  "Peer-reviewed methodologies grounded in open data and reproducible science",
                  "In-country expertise embedded across Southeast Asia, Africa, and South Asia",
                  "Integrated field survey, laboratory, and remote sensing capabilities",
                  "Fully compliant with IFC Performance Standards and national environmental regulations",
                ].map((f) => (
                  <li key={f}>
                    <span className="chk">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {active === "purpose" && (
            <div className="panel">
              <span className="section-tag">Why we exist</span>
              <h2>Our purpose</h2>
              <p className="panel-sub">
                We believe that better spatial and environmental data leads to
                better decisions — for communities, ecosystems, and economies.
                Our purpose is to make that data accessible, interpretable, and
                actionable for every client we serve.
              </p>
              {[
                {
                  icon: "🌍",
                  title: "Sustainable development",
                  desc: "We design every analysis with long-term environmental sustainability in mind, ensuring our work protects water resources, land, and biodiversity for future generations.",
                },
                {
                  icon: "📊",
                  title: "Data-driven decisions",
                  desc: "From watershed modeling to satellite land classification, we replace guesswork with spatial evidence — helping governments, donors, and private clients allocate resources where they matter most.",
                },
                {
                  icon: "👥",
                  title: "Community impact",
                  desc: "We embed local knowledge in every engagement, working alongside communities and national institutions to build lasting capacity alongside every project deliverable.",
                },
                {
                  icon: "🛡️",
                  title: "Scientific accountability",
                  desc: "Transparent methods, open data practices, and rigorous peer-review underpin everything we produce. We stand behind our results with full documentation and reproducibility.",
                },
              ].map((p) => (
                <div key={p.title} className="purpose-card">
                  <h3>
                    <span className="p-icon">{p.icon}</span>
                    {p.title}
                  </h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          )}

          {active === "mission" && (
            <div className="panel">
              <span className="section-tag">Mission statement</span>
              <h2>Our mission</h2>
              <p className="panel-sub">
                To deliver precision engineering and spatial science that
                empowers organizations to manage land, water, and environment
                with confidence and clarity.
              </p>
              <div className="mv-block">
                <div className="mv-icon">🚩</div>
                <h3>Engineering with purpose</h3>
                <p>
                  Our mission is to apply the highest standards of geospatial
                  and environmental science to solve the pressing resource
                  management challenges facing governments, development
                  agencies, and communities across the globe.
                </p>
                <ul className="mv-points">
                  {[
                    "Deliver technically rigorous, peer-reviewed engineering analysis",
                    "Build local capacity alongside every project we execute",
                    "Use open-source tools and open data wherever possible",
                    "Report findings transparently with full uncertainty quantification",
                    "Support sustainable resource use for communities and ecosystems",
                  ].map((m) => (
                    <li key={m}>
                      <span className="arr">→</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {active === "vision" && (
            <div className="panel">
              <span className="section-tag">Looking ahead</span>
              <h2>Our vision</h2>
              <p className="panel-sub">
                To be the leading geospatial and environmental engineering
                consultancy in the Asia-Pacific region — recognized for
                scientific excellence and transformative impact on how societies
                manage their natural resources.
              </p>
              <div className="mv-block">
                <div className="mv-icon">🔭</div>
                <h3>Where we are headed</h3>
                <p>
                  By 2030, we envision Exomac Engineering as a globally
                  recognized center of excellence for integrated geospatial and
                  water resource science. We are investing in cloud-based GIS
                  infrastructure, ML-assisted remote sensing pipelines, and
                  expanded field teams across the Mekong, Irrawaddy, and
                  Ganges-Brahmaputra basins.
                </p>
                <ul className="mv-points">
                  {[
                    "Regional leader in GIS-enabled water resource management by 2028",
                    "Establish a geospatial research lab with a regional university partner",
                    "Train 500+ local engineers in advanced GIS and hydrological modeling",
                    "Achieve carbon-neutral operations across all field programs",
                    "Publish open datasets from all non-confidential project assignments",
                  ].map((m) => (
                    <li key={m}>
                      <span className="arr">→</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {active === "team" && (
            <div className="panel">
              <span className="section-tag">Our people</span>
              <h2>Team members</h2>
              <p className="panel-sub">
                Our leadership and specialist team brings together decades of
                field, analytical, and advisory experience across four core
                engineering disciplines.
              </p>
              <div className="team-grid">
                {TEAM.map((t) => (
                  <div key={t.name} className="team-card">
                    <div className="team-avatar">{t.initials}</div>
                    <h3>{t.name}</h3>
                    <div className="team-role">{t.role}</div>
                    <span className="team-dept">{t.dept}</span>
                    <div className="team-social">
                      <span title="LinkedIn">🔗</span>
                      <span title="Email">✉️</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
