import React from "react";
import "./projectStyle.css";

const Projects = () => {
  return (
    <>
      <div className="right-resume-child-top">
        <div className="right-resume-text-top">
          <div style={{ display: "flex" }}>
            <div className="orange-point"></div>
            <p style={{ paddingLeft: "5px", fontSize: "1.6rem" }}>
              <span className="organization-name">
                Personal Portfolio Website
              </span>
            </p>
          </div>
          <div>
            <button className="edu-year-btn" style={{ fontSize: "1.6rem" }}>
              2022-2023
            </button>
          </div>
        </div>
        <p style={{ fontSize: "1.6rem" }}>
          <b> Technologies Used : React JS, Bootstrap</b> <br />A personal
          portfolio website to showcase all my details and projects at one place
        </p>
      </div>

      <div className="right-resume-child-top">
        <div className="right-resume-text-top">
          <div style={{ display: "flex" }}>
            <div className="orange-point"></div>
            <p style={{ paddingLeft: "5px", fontSize: "1.6rem" }}>
              <span className="organization-name">Ecommerce Website</span>
            </p>
          </div>
          <div>
            <button className="edu-year-btn" style={{ fontSize: "1.6rem" }}>
              2022-2023
            </button>
          </div>
        </div>
        <p style={{ fontSize: "1.6rem" }}>
          <b>
            {" "}
            Technologies Used : Mongo DB, Express Js, React Js, Node Js, Redux,
            Bootstrap.
          </b>{" "}
          <br />
          An ecommerce website for showcasing and selling products online with
          payment system integration, both Paypal and stripe
        </p>
      </div>

      <div className="right-resume-child-top">
        <div className="right-resume-text-top">
          <div style={{ display: "flex" }}>
            <div className="orange-point"></div>
            <p style={{ paddingLeft: "5px", fontSize: "1.6rem" }}>
              <span className="organization-name">Weather Forecast</span>
            </p>
          </div>
          <div>
            <button className="edu-year-btn" style={{ fontSize: "1.6rem" }}>
              2022-2023
            </button>
          </div>
        </div>
        <p style={{ fontSize: "1.6rem" }}>
          <b>Technologies Used : React Js, Ajax, HTML,CSS,Bootstrap</b> <br />{" "}
          An weather application showing weather to users runtime
        </p>
      </div>
    </>
  );
};

export default Projects;
