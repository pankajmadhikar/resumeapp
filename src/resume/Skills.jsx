import React from "react";
import "./SkillStyle.css";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  return (
    <>
      <div className="skill-main">
        <div className="skill">
          <SkillContainer text={"Javascript"} className={"width-70"} />
          <SkillContainer text={"HTML"} className={"width-80"} />
          <SkillContainer text={"CSS"} className={"width-80"} />
          <SkillContainer text={"Bootstrap"} className={"width-80"} />
          <SkillContainer text={"AJAX"} className={"width-80"} />
          <SkillContainer text={"React"} className={"width-80"} />
          <SkillContainer text={"Redux"} className={"width-80"} />
          <SkillContainer text={"Node Js"} className={"width-70"} />
          <SkillContainer text={"Express"} className={"width-70"} />
          <SkillContainer text={"Mongo DB"} className={"width-75"} />
        </div>
      </div>
    </>
  );
};

export default Skills;
