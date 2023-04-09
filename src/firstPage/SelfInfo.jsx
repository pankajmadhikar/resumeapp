import React from "react";
import Typical from "react-typical";
import pmResume from "../assets/pmresume.pdf";

const SelfInfo = () => {
  return (
    <div className="selfinfo-div container">
      <div className="selfinfo-div-child">
        <div className="social-icons">
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/pankaj-madhikar-359827258"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
              }}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="icon">
            <i
              style={{ cursor: "pointer" }}
              className="fa-brands fa-square-facebook"></i>
          </div>
          <div className="icon">
            <i
              style={{ cursor: "pointer" }}
              className="fa-brands fa-square-instagram"></i>
          </div>
          <div className="icon">
            <i
              style={{ cursor: "pointer" }}
              className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <h3>
          Hello i'm <span style={{ color: "rgb(243, 77, 1)" }}>Pankaj</span>{" "}
        </h3>

        <Typical
          loop={Infinity}
          steps={[
            "Full Stack Developer",
            1000,
            "MERN Stack Developer",
            1000,
            "UI Designer",
            1000,
          ]}
          wrapper="h1"
        />

        <p>knock of building applications with front and back end operations</p>
        <div className="btn-div">
          <button className="button-primary button">Hire Me</button>

          <a className="button-secondary button" href={pmResume}>
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelfInfo;
