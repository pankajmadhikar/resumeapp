import React from "react";
import "./AboutMeStyle.css";
import AboutRight from "./AboutRight";
import AboutLeft from "./AboutLeft";

const AboutMePage = () => {
  return (
    <div className="about-me-div container">
      <h1>About Me</h1>
      <p className="chooseme">Why Choose Me</p>
      <div className="aboutme-hr-div">
        <div className="aboutme-bighr-div"></div>
      </div>
      <div className="aboutme-left-right-div">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
};

export default AboutMePage;
