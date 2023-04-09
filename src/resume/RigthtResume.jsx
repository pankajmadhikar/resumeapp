import React, { useState } from "react";
import Education from "./Education";
import Interests from "./Interests";
import Projects from "./Projects";
import Skills from "./Skills";

const RigthtResume = (props) => {
  const { education, skill, project, interest } = props;

  return (
    <div className="right-resume-main">
      {education ? <Education /> : ""}
      {skill ? <Skills /> : ""}
      {project ? <Projects /> : ""}
      {interest ? <Interests /> : ""}
    </div>
  );
};

export default RigthtResume;
