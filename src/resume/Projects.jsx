import React from "react";
import "./projectStyle.css";

const Projects = () => {
  return (
    <>
      <a
        href="https://pmportfolioresume.netlify.app/"
        target="_blank"
        className="project_link_style">
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
            portfolio website to showcase all my details and projects at one
            place
          </p>
        </div>
      </a>

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
            Technologies Used : React Js, Redux, Bootstrap, Firebase, Material
            UI, Mongo Db.
          </b>{" "}
          <br />
          <div className="project_div_box_single">
            <div className="project_div_single">
              <div className="project_point"></div>
              <a
                href="https://food-byingredient.netlify.app"
                className="project_link_style">
                <b>Food Ingredient</b>
              </a>
            </div>
            <div className="project_div_single">
              <div className="project_point"></div>
              <a
                href="https://mbproject.netlify.app/"
                className="project_link_style">
                <b>Ecommerce App</b>
              </a>
            </div>
            <div className="project_div_single">
              <div className="project_point"></div>
              <a
                href="https://pankajmadhikar.github.io/merafurniture/"
                target="_blank"
                className="project_link_style">
                <b>Furniture App</b>
              </a>
            </div>
          </div>
        </p>
      </div>

      <a
        href="https://weatherprojectbypm.netlify.app/"
        className="project_link_style"
        target="_blank">
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
      </a>
    </>
  );
};

export default Projects;
