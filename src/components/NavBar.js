import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
          <nav>
              <div className="navbar">{/*{code here}*/}
                <NavLink exact to="/" style={{paddingRight:"35px"}}>Home</NavLink>
                <NavLink to="/movies" style={{paddingRight:"35px"}}>Movies</NavLink>
                <NavLink to="/actors" style={{paddingRight:"35px"}}>Actors</NavLink>
                <NavLink to="/directors" style={{paddingRight:"35px"}}>Directors</NavLink>
              </div>
          </nav>
         
         )
}

export default NavBar;
