import React from "react";
import pmResume from "../assets/pmresume.pdf";

const AboutRight = () => {
  return (
    <div className="aboutme-right">
      <div className="why-choose-me-text">
        <p>
          MERN stack developer with redux & redux toolkit with background
          knowledge of NodeJs, Express, MongoDB building applications with
          utmost effeciency. Strong professional with a BSC(Computer Science)
          willing to be an asset for an organization.
        </p>
      </div>
      <div className="aboutme-highlight">
        <h3 style={{ marginBottom: "15px" }}>Here are a Few Highlights:</h3>
        <div className=" headline-child">
          <div className="orange-point"></div> <p>MERN Stack Web Developer</p>
        </div>
        <div className="headline-child">
          {" "}
          <div className="orange-point"></div>{" "}
          <p>Interactive Front End as per the design</p>
        </div>
        <div className="headline-child">
          <div className="orange-point"></div>
          <p>ReactJs</p>
        </div>
        <div className="headline-child">
          <div className="orange-point"></div> <p>Redux for State Management</p>
        </div>
        <div className="headline-child">
          <div className="orange-point"></div> <p>Building Rest API </p>
        </div>
        <div className="headline-child">
          <div className="orange-point"></div> <p>Managing Database</p>
        </div>
      </div>
      <div className="aboutme-btns">
        <button
          className="button-primary button"
          style={{ fontSize: "1.6rem", marginRight: "1rem" }}>
          Hire Me
        </button>

        <a
          className="button-secondary button"
          style={{ fontSize: "1.6rem" }}
          href={pmResume}>
          Get Resume
        </a>
      </div>
    </div>
  );
};

export default AboutRight;
