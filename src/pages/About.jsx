import React from "react";
import HeroBanner from "../pages/HeroBanner";
import "./style/About.css";

const TEAM = [
  {
    initials: "MV",
    name: "Men Vuthy",
    specialty: (
      <div className="team-role">
        M.Eng. in Civil Engineering (River & Environmental Engineering)
        <br />
        University of Tokyo, Japan
      </div>
    ),
    // univeristy: "University of Tokyo, Japan",
    dept: "Research Team Leader",
    background:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
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

const PURPOSE = [
  {
    icon: "🌍",
    title: "Sustainable Development",
    desc: "We design every analysis with long-term environmental sustainability in mind, ensuring our work protects water resources, land, and biodiversity for future generations.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc: "From watershed modeling to satellite land classification, we replace guesswork with spatial evidence — helping governments and private clients allocate resources where they matter most.",
  },
  {
    icon: "👥",
    title: "Community Impact",
    desc: "We embed local knowledge in every engagement, working alongside communities and national institutions to build lasting capacity alongside every project deliverable.",
  },
  {
    icon: "🛡️",
    title: "Scientific Accountability",
    desc: "Transparent methods, open data practices, and rigorous peer-review underpin everything we produce. We stand behind our results with full documentation and reproducibility.",
  },
];

const VALUES = [
  {
    icon: "🔬",
    title: "Scientific Rigor",
    desc: "Every analysis grounded in peer-reviewed methodology and validated field data.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Solutions designed to protect ecosystems and support long-term resource management.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    desc: "Local knowledge embedded in every project, working alongside communities and institutions.",
  },
  {
    icon: "📋",
    title: "Accountability",
    desc: "Transparent reporting, open data practices, and clear governance at every stage.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <HeroBanner
        title="About"
        titleAccent="CWIL"
        subtitle="Precision-driven geospatial, hydrological, and environmental engineering — trusted by governments, NGOs, and private sector clients across 25+ countries since 2007."
        breadcrumb={[{ label: "About Us" }]}
      />

      <div className="about-body">
        {/* ── WHO WE ARE ── */}
        <div className="s-card" id="who">
          <span className="s-tag">Introduction</span>
          <h2>Who We Are</h2>
          <p className="s-intro">
            Exomac Engineering is a multidisciplinary consultancy founded in
            2007, specializing in GIS &amp; geospatial analysis, hydrology,
            environmental engineering, and remote sensing. We work at the
            intersection of spatial data science and real-world engineering to
            deliver solutions that are scientifically rigorous and practically
            impactful.
          </p>

          <div className="stats-row">
            {[
              ["18+", "Years of experience"],
              ["150+", "Projects completed"],
              ["40+", "Expert engineers"],
              ["25+", "Countries served"],
            ].map(([n, l]) => (
              <div key={l} className="stat-box">
                <div className="stat-num">{n}</div>
                <div className="stat-lbl">{l}</div>
              </div>
            ))}
          </div>

          <div className="s-divider" />

          <ul className="feat-list">
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

        {/* ── OUR PURPOSE ── */}
        <div className="s-card" id="purpose">
          <span className="s-tag">Why We Exist</span>
          <h2>Our Purpose</h2>
          <p className="s-intro">
            We believe that better spatial and environmental data leads to
            better decisions — for communities, ecosystems, and economies. Our
            purpose is to make that data accessible, interpretable, and
            actionable for every client we serve.
          </p>

          <div className="purpose-grid">
            {PURPOSE.map((p) => (
              <div key={p.title} className="purpose-item">
                <h3>
                  <span className="p-icon">{p.icon}</span>
                  {p.title}
                </h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MISSION & VISION ── */}
        <div className="s-card" id="mission-vision">
          <span className="s-tag">Direction</span>
          <h2>Mission &amp; Vision</h2>
          <p className="s-intro">
            Our mission defines how we work today; our vision shapes where we
            are headed by 2030.
          </p>

          <div className="mv-columns">
            <div className="mv-col">
              <div className="mv-header">
                <div className="mv-icon-box">🚩</div>
                <div>
                  <h3>Our Mission</h3>
                  <div className="mv-sub">How we work today</div>
                </div>
              </div>
              <p>
                To deliver precision engineering and spatial science that
                empowers organizations to manage land, water, and environment
                with confidence and clarity.
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
            <div className="mv-col">
              <div className="mv-header">
                <div className="mv-icon-box">🔭</div>
                <div>
                  <h3>Our Vision</h3>
                  <div className="mv-sub">Where we are headed by 2030</div>
                </div>
              </div>
              <p>
                To be the leading geospatial and environmental engineering
                consultancy in the Asia-Pacific region — recognized for
                scientific excellence and transformative impact on natural
                resource management.
              </p>
              <ul className="mv-points">
                {[
                  "Regional leader in GIS-enabled water resource management by 2028",
                  "Establish a geospatial research lab with a university partner",
                  "Train 500+ local engineers in GIS and hydrological modeling",
                  "Achieve carbon-neutral field operations",
                  "Publish open datasets from all non-confidential assignments",
                ].map((m) => (
                  <li key={m}>
                    <span className="arr">→</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── CORE VALUES ── */}
        <div className="s-card" id="values">
          <span className="s-tag">What Drives Us</span>
          <h2>Our Core Values</h2>
          <p className="s-intro">
            Four principles guide every project, every report, and every field
            survey we undertake.
          </p>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value-box">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TEAM ── */}
        <div className="s-card" id="team">
          <span className="s-tag">Our People</span>
          <h2>Team Members</h2>
          <p className="s-intro">
            Our leadership and specialist team brings together decades of field,
            analytical, and advisory experience across four core engineering
            disciplines.
          </p>
          <div className="team-grid">
            {TEAM.map((t) => (
              <div key={t.name} className="team-card">
                <div className="team-avatar">{t.initials}</div>
                <h3>{t.name}</h3>
                <div className="team-role">{t.specialty}</div>
                {/* <div className="team-role">{t.univeristy}</div> */}
                <span className="team-dept">{t.dept}</span>
                <div className="team-bg">{t.background}</div>
                <div className="team-social">🔗 ✉️</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="cta-strip">
          <div>
            <h3>Ready to work with us?</h3>
            <p>
              Tell us about your project and we'll respond within one business
              day.
            </p>
          </div>
          <a href="/contact" className="btn-primary">
            Reach Us →
          </a>
        </div>
      </div>
    </div>
  );
}
