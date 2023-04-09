import React, { useState } from "react";
import LeftResume from "./LeftResume";
import "./ResumeStyle.css";
import RigthtResume from "./RigthtResume";

const ResumeMain = () => {
  const [education, setEducation] = useState(true);
  const [skill, setSkill] = useState(false);
  const [project, setProject] = useState(false);
  const [interest, setInterest] = useState(false);
  return (
    <div className=" resume-main-div container">
      <h1>Resume</h1>
      <p className="chooseme">My Formal Bio Detail</p>
      <div className="aboutme-hr-div">
        <div className="aboutme-bighr-div"></div>
      </div>
      <div className="resume-left-right-div">
        <LeftResume
          setSkill={setSkill}
          setEducation={setEducation}
          setProject={setProject}
          setInterest={setInterest}
        />
        <div className="resume-verical-line"></div>
        <RigthtResume
          education={education}
          skill={skill}
          project={project}
          interest={interest}
        />
      </div>
    </div>
  );
};

export default ResumeMain;
