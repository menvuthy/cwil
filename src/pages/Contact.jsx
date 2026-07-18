import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";

import "./style/Contact.css";

import Hero from "../assets/home-bg/home-bg-71.jpg";

import {
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaHandshake,
  FaLightbulb,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Contact() {
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

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "667dda20-9fad-4600-8351-3069f9489f3b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for contacting CWIL. We will get back to you soon.",
        icon: "success",
        confirmButtonColor: "#0097b2",
        confirmButtonText: "OK",

        customClass: {
          popup: "cwil-swal",
          title: "cwil-swal-title",
          htmlContainer: "cwil-swal-text",
        },
      });

      event.target.reset();
    } else {
      Swal.fire({
        title: "Submission Failed",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",

        customClass: {
          popup: "cwil-swal",
          title: "cwil-swal-title",
          htmlContainer: "cwil-swal-text",
        },
      });
    }
  };

  return (
    <main className="contact-page">
      {/* HERO BANNER */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="contact-hero-overlay">
          <span className="about-hero-tag">Get In Touch</span>
          <h1>
            Let's Work Together on
            <br />
            Water Challenges
          </h1>
          <p>
            CWIL supports research, engineering, geospatial analysis, artificial
            intelligence, and decision-making for sustainable water management
            and climate resilience.
          </p>
        </div>
      </section>

      <div className="contact-page">
        {/* Main */}
        <section className="contact-main container">
          {/* Left Side */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>info@cwil.co.kh</p>
              </div>
            </div>

            {/* <div className="info-card">
              <FaGlobe />
              <div>
                <h4>Website</h4>
                <p>www.cwil.co.kh</p>
              </div>
            </div> */}

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Phnom Penh, Cambodia</p>
              </div>
            </div>

            <div className="collaboration-box">
              <h3>Collaboration Areas</h3>

              <ul>
                <li>
                  <FaHandshake />
                  Research Collaboration
                </li>

                <li>
                  <FaLightbulb />
                  Technology Consultation
                </li>

                <li>
                  <FaTools />
                  Technical Consulting Services
                </li>

                <li>
                  <FaProjectDiagram />
                  Project Partnerships
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-form-wrapper">
            {/* <h2>Contact Us</h2> */}

            <form
              className="contact-form"
              onSubmit={onSubmit}
              method="POST"
              encType="text/plain"
            >
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Write Message..."
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="location-section">
          <div className="container">
            <h2>Our Location</h2>

            <div className="map-wrapper">
              <iframe
                title="CWIL Location"
                src="https://www.google.com/maps?q=Phnom+Penh+Cambodia&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
