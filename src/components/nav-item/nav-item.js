import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (
    activeItem,
    onNavClick,
    item,
    description,
    hideMenu
  ) => {

  const onClick = () => {
    onNavClick(item);
    hideMenu();
  };

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
        onClick={ onClick } >
        { description }
      </NavLink>
    </li>
  );
};

export default NavItem;