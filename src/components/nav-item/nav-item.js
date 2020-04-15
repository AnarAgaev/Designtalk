import React from "react";
import {Link} from "react-router-dom";

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

      <Link
        to={`/${item}`}
        className="nav__link"
        onClick={ () => onNavClick(item) } >
        { description }
      </Link>
    </li>
  );
};

export default NavItem;