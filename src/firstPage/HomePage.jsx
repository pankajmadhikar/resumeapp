import React, { useState } from "react";
import SelfInfo from "./SelfInfo";
import "./firstPageStyle.css";
import ProfileDp from "./ProfileDp";
import Navbar from "./Navbar";

const HomePage = () => {
  const [hambeger, setHamberger] = useState("hamberger-menu");
  return (
    <>
      <div className=" home-main  ">
        <div
          className="container"
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
          }}>
          <Navbar /> <h1 style={{ fontSize: "3.5rem" }}>Portfolio</h1>
        </div>
        <div className="home-page-div">
          <div className="selfInfo-maindiv">
            <SelfInfo />
          </div>
          <div className="profileDp-maindiv">
            <ProfileDp />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="0.4"
            d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,176C420,171,480,149,540,144C600,139,660,149,720,165.3C780,181,840,203,900,218.7C960,235,1020,245,1080,224C1140,203,1200,149,1260,138.7C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
};

export default HomePage;
