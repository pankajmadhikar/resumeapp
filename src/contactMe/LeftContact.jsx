import React from "react";

const LeftContact = () => {
  return (
    <div className="left-contact-div">
      <div className="left-icon-div">
        <h1>Get In Touch</h1>
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
            <i className="fa-brands fa-square-facebook"></i>
          </div>
          <div className="icon">
            <i className="fa-brands fa-square-instagram"></i>
          </div>
          <div className="icon">
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="left-social-div">
        <p className="chooseme" style={{ color: "#999", textAlign: "left" }}>
          {" "}
          Send Your Email Here!
        </p>
        <div className="left-contact-social-image"></div>
      </div>
    </div>
  );
};

export default LeftContact;
