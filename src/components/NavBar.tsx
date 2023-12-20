import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <body>
      <nav id="topnav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/SoloWork">
          Solo Projects
        </NavLink>
        <NavLink className="nav-link" to="/ProfessionalWork">
          Professional Projects
        </NavLink>
        <NavLink className="nav-link" to="/About">
          About
        </NavLink>
      </nav>
    </body>
  );
}

export default NavBar;
