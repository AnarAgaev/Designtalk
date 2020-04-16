import React from "react";
import { connect } from "react-redux";
import { handleNavClick } from "../../actions";
import Nav from "./nav";
import NavItem from "../nav-item";
import navItems from "./nav-items-data";

const renderNavItemList = (
    activeItem,
    onNavClick,
    navItemList
  ) => {

  return navItemList.map((item) => {
    return NavItem(
      activeItem,
      onNavClick,
      item[0],
      item[1]
    );
  });
};

const NavContainer = ({
    activeItem,
    onNavClick
  }) => {

  const url = window.location.href;
  const activate = onNavClick;

  navItems.forEach((item) => {
    return url.includes(item[0])
      ? activate(item[0])
      : null;
  });

  const elements = renderNavItemList(
    activeItem,
    onNavClick,
    navItems
  );

  return (
    <Nav elements={ elements } />
  );
};

const masStateToProps = (
    { navigation: { activeItem } }
  ) => {

  return {
    activeItem
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    onNavClick: (activeItem) =>
      handleNavClick(dispatch, activeItem)
  };
};

export default connect(
    masStateToProps,
    mapDispatchToPros
)(NavContainer);