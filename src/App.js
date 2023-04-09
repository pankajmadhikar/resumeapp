import AboutMePage from "./aboutMe/AboutMePage";
import "./App.css";
import ContactMeMain from "./contactMe/ContactMeMain";
import HomePage from "./firstPage/HomePage";
import ResumeMain from "./resume/ResumeMain";
import React, { useState } from "react";

function App() {
  return (
    <>
      <HomePage />
      <AboutMePage />
      <ResumeMain />
      <ContactMeMain />
    </>
  );
}

export default App;
