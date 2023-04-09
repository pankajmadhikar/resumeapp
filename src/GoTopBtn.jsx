import React from "react";

const GoTopBtn = () => {
  const gototop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="gototop" onClick={gototop}>
      <h1>
        <i className="fa-solid fa-up-long"></i>
      </h1>
    </div>
  );
};

export default GoTopBtn;
