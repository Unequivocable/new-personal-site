import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1><NavLink to="/about">Dustin Siggelkow's </NavLink><NavLink to="/">Portfolio</NavLink></h1>
    </header>
  );
};

export default Header;
