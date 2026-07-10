import React from "react";
import { Link } from "react-router-dom";
import "./style/HeroBanner.css";

export default function HeroBanner({
  title,
  titleAccent,
  subtitle,
  breadcrumb,
}) {
  return (
    <div className="hero-banner">
      <div className="container hb-inner">
        <div className="breadcrumb">
          <Link to="/">🏠 Home</Link>
          {breadcrumb.map((crumb, i) => (
            <React.Fragment key={i}>
              <span>›</span>
              {crumb.to ? (
                <Link to={crumb.to}>{crumb.label}</Link>
              ) : (
                <span className="current">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <h1>
          {title} {titleAccent && <em>{titleAccent}</em>}
        </h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
