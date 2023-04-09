import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import PaletteIcon from "@mui/icons-material/Palette";

const LeftResume = (props) => {
  const { setSkill, setEducation, setProject, setInterest } = props;
  return (
    <div className="left-resume">
      <div className="left-resume-main">
        <div
          className="left-resume-main-child"
          onClick={() => {
            setSkill(false);
            setProject(false);
            setInterest(false);
            setEducation(true);
          }}>
          <div className="resume-icon">
            <SchoolIcon style={{ fontSize: "3rem", cursor: "pointer" }} />
          </div>
          <div className=" left-resume-text">
            <p>Education</p>
          </div>
        </div>
        <div
          className="left-resume-main-child"
          onClick={() => {
            setEducation(false);
            setProject(false);
            setInterest(false);
            setSkill(true);
          }}>
          <div className="resume-icon">
            <ComputerIcon style={{ fontSize: "3rem", cursor: "pointer" }} />
          </div>
          <div className=" left-resume-text">
            <p>Programming Skills</p>
          </div>
        </div>
        <div
          className="left-resume-main-child"
          onClick={() => {
            setEducation(false);
            setSkill(false);
            setInterest(false);
            setProject(true);
          }}>
          <div className="resume-icon">
            <AlignVerticalBottomIcon
              style={{ fontSize: "3rem", cursor: "pointer" }}
            />
          </div>
          <div className=" left-resume-text">
            <p>Projects</p>
          </div>
        </div>
        <div
          className="left-resume-main-child"
          onClick={() => {
            setEducation(false);
            setProject(false);
            setSkill(false);
            setInterest(true);
          }}>
          <div className="resume-icon">
            <PaletteIcon style={{ fontSize: "3rem", cursor: "pointer" }} />
          </div>
          <div className=" left-resume-text">
            <p>Interest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftResume;
