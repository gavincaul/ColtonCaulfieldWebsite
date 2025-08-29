import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const link = ({ isActive }) => {
    return {
      color: "#FFFFFF",
      textDecoration: "underline",
      fontWeight: "none",
    };
  };
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 1000);
  };
  return (
    <div className="gradient_background">
      <div
        onClick={handleClick}
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease", 
          position: "absolute",
          left: "80%",
          top: "20%",
          color: "white",
          cursor: "pointer",
        }}
      >
        /H___
      </div>
      <div className="hometitle">
        <p>COLTON CAULFIELD</p>
      </div>
      <div className="trailer">
        <p> TRAILER EDITOR </p>
      </div>
      <div className="sec">
        <NavLink style={link} to="/SoloWork">
          <p>Solo Projects</p>
        </NavLink>
        <NavLink style={link} to="/ProfessionalWork">
          <p>Professional Work</p>
        </NavLink>
        <NavLink style={link} to="/About">
          <p>About/Contact</p>
        </NavLink>
      </div>
    </div>
  );
}
