import React from "react";

const SkillContainer = (props) => {
  return (
    <div className="skill-content-main">
      <div className="orange-point"></div>
      <div className="skill-content">
        <p style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
          <span className="">{props.text}</span>
        </p>
        <div className="skill-bar-div">
          <div className={props.className}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
