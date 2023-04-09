import React from "react";

const Interests = () => {
  return (
    <>
      <div className="right-resume-child-top">
        <div className="right-resume-text-top">
          <div style={{ display: "flex" }}>
            <div className="orange-point"></div>
            <p style={{ paddingLeft: "5px", fontSize: "1.6rem" }}>
              <span className="organization-name">Teaching</span>
            </p>
          </div>
        </div>
        <p style={{ fontSize: "1.6rem" }}>
          Apart from being a tech enthusiast and a code writer, i also love to
          teach people what i know simply because i believe in sharing.
        </p>
      </div>

      <div className="right-resume-child-top">
        <div className="right-resume-text-top">
          <div style={{ display: "flex" }}>
            <div className="orange-point"></div>
            <p style={{ paddingLeft: "5px", fontSize: "1.6rem" }}>
              <span className="organization-name">Music</span>
            </p>
          </div>
        </div>
        <p style={{ fontSize: "1.6rem" }}>
          Listening to soothing music is something i can naver compromise with,
          skimming through Spotify's pop songs charts is at times the best
          stress reliever that i can get my hands on.
        </p>
      </div>
      <div className="right-resume-child-top">
        <div className="right-resume-text-top">
          <div style={{ display: "flex" }}>
            <div className="orange-point"></div>
            <p style={{ paddingLeft: "5px", fontSize: "1.6rem" }}>
              <span className="organization-name">Competitive Gaming</span>
            </p>
          </div>
        </div>
        <p style={{ fontSize: "1.6rem" }}>
          I like to challenge my reflexes a lot while competing in football
          games, pushing the rank and having interactive gaming sessions excites
          me the most.
        </p>
      </div>
    </>
  );
};

export default Interests;
