import React from "react";

const Education = () => {
  return (
    <>
      <div className="right-resume-child">
        <div className="right-resume-text">
          <div className="orange-point"></div>
          <p>
            <span className="organization-name">
              Babasaheb Ambedkar Marathwada Univercity Sambhajinagar
            </span>
            <br />
            BACHELOR OF SCIENCE INFORMATION TECHNOLOGY
          </p>
        </div>
        <div>
          <button className="edu-year-btn" style={{ fontSize: "1.6rem" }}>
            2019-2023
          </button>
        </div>
      </div>
      <div className="right-resume-child">
        <div className="right-resume-text">
          <div className="orange-point"></div>
          <p>
            <span className="organization-name">
              Mahatma Gandhi Collage Loni(Pravara Nagar) Ahamadnagar
            </span>
            <br />
            Eleventh-twelth (11th-12th)
          </p>
        </div>
        <div>
          <button className="edu-year-btn" style={{ fontSize: "1.6rem" }}>
            2017-2019
          </button>
        </div>
      </div>
      <div className="right-resume-child">
        <div className="right-resume-text">
          <div className="orange-point"></div>
          <p>
            <span className="organization-name">
              Tanwani English School Sambhajinagar
            </span>
            <br />
            5th to 10th
          </p>
        </div>
        <div>
          <button className="edu-year-btn" style={{ fontSize: "1.6rem" }}>
            2012-2017
          </button>
        </div>
      </div>
    </>
  );
};

export default Education;
