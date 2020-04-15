import React from "react";
import "./nav.scss";

const Nav = ({ elements }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        { elements }
      </ul>
    </nav>
  );
};

export default Nav;