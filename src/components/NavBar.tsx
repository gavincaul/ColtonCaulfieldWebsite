import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav id="topnav">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/SoloWork">
        Solo
      </NavLink>
      <NavLink className="nav-link" to="/ProfessionalWork">
        Professional
      </NavLink>
      <NavLink className="nav-link" to="/About">
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
