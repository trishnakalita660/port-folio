import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import "./navbar.css";

function Navbar() {
  return (
     <div>
      <div className="nav__header">
        
        <nav>
        
          <NavLink
          exact to="/"
            
             
            className="nav__links"
          >
            Home
          </NavLink>

           
          <NavLink
            to="/about"
            activeClassName="active__link"
            className="nav__links"
          >
            About Me!
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="active__link"
            className="nav__links"
          >
            Projects
          </NavLink>
        </nav>
        
    </div>
   
    </div>
  );
}

export default Navbar;
