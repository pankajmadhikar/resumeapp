import React from "react";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";
import "./ContactMeStyle.css";
import GoTopBtn from "../GoTopBtn";

const ContactMeMain = () => {
  return (
    <div className="about-me-div container" style={{ marginBottom: "5rem" }}>
      <h1>Contact Me</h1>
      <p className="chooseme">Lets Keep In Touch</p>
      <div className="aboutme-hr-div">
        <div className="aboutme-bighr-div"></div>
      </div>
      <div className="aboutme-left-right-div-contact">
        <LeftContact />
        <RightContact />
      </div>
      <GoTopBtn />
    </div>
  );
};

export default ContactMeMain;
