import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNavClick } from "../../actions";
import Nav from "./nav";
import NavItem from "../nav-item";

const navItems = [
  ["about", "о нас"],
  ["publish-project", "опубликовать проект"],
  ["contacts", "контакты"],
  ["for-advertisers", "рукламодателям"],
];

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

class NavContainer extends Component {

  componentDidMount() {
    const url = window.location.href;
    const activate = this.props.onNavClick;

    navItems.forEach((item) => {
      return url.includes(item[0])
        ? activate(item[0])
        : null;
    });
  }

  render() {
    const elements = renderNavItemList(
      this.props.activeItem,
      this.props.onNavClick,
      navItems
    );

    return (
      <Nav elements={ elements } />
    );
  };
}

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