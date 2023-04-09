import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import ContactMeMain from "../contactMe/ContactMeMain";

const Navbar = () => {
  return (
    // <div className="header ">
    //   <div className="header-main container">
    //     <div className="header-symbol">
    //       <h1>EDUCATION</h1>
    //     </div>
    //     <div className="header-list">
    //       <p style={{ cursor: "pointer" }}>Home</p>
    //       <p style={{ cursor: "pointer" }}>About</p>
    //       <p style={{ cursor: "pointer" }}>Testimonial</p>
    //       <p style={{ cursor: "pointer" }}>Profile</p>
    //     </div>
    //   </div>
    // </div>

    <>
      <Button
        variant="text"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample">
        <MenuIcon style={{ color: "#fff", fontSize: "3.5rem" }} />
      </Button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div style={{ textAlign: "right", fontSize: "2rem", padding: "2rem" }}>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100%",
          }}>
          <h5 style={{ fontSize: "2.5rem" }}>Home</h5>
          <h5 style={{ fontSize: "2.5rem" }}>About</h5>
          <h5 style={{ fontSize: "2.5rem" }}> Testimonial</h5>
          <h5 style={{ fontSize: "2.5rem" }} onClick={() => <ContactMeMain />}>
            Contact
          </h5>
        </div>
      </div>
    </>
  );
};

export default Navbar;
