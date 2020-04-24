import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNavClick } from "../../actions";
import Nav from "./nav";
import renderNavItemList from "./render-nav-item-list";
import navItems from "./nav-items-data";

class NavContainer extends Component {

  componentDidMount() {
    const url = window.location.href;

    /*
     * There's two dispatches because navigation has render
     * at the header and at the footer components
    */
    navItems.forEach((item) => {
      if ( url.includes(item[0]) ) {
        this.props.onNavClick(item[0])
      }
    });
  }

  render() {
    const { activeItem, onNavClick } = this.props;

    const elements = renderNavItemList(
      activeItem,
      onNavClick,
      navItems
    );

    return (
      <Nav elements={ elements } />
    );
  }
}

const masStateToProps = ({ navigation }) => {
  return {
    activeItem : navigation.activeItem
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