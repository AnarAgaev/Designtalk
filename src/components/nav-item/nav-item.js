import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (
    activeItem,
    onNavClick,
    item,
    description
  ) => {

  return (
    <li
      key={ item }
      className={
        activeItem === item
          ? "nav__item active"
          : "nav__item"
      }
    >

      <NavLink
        to={`/${item}`}
        className="nav__link"
        onClick={ () => onNavClick(item) } >
        { description }
      </NavLink>
    </li>
  );
};

export default NavItem;