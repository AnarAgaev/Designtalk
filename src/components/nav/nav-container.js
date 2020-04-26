import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNavClick } from "../../actions";
import renderNavItemList from "./render-nav-item-list";
import { toggleVisibleMenu } from "../../actions";
import Nav from "./nav";
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
    const {
      activeItem, visible, onNavClick,
      mobileNavSocial, sendMailToUs,
      mobileNavLogo, btnHideMenu,
      hideMenu
    } = this.props;

    const elements = renderNavItemList(
      activeItem, onNavClick, navItems, hideMenu
    );

    return (
      <Nav elements={ elements }
           mobileNavSocial={ mobileNavSocial }
           sendMailToUs={ sendMailToUs }
           mobileNavLogo={ mobileNavLogo }
           btnHideMenu={ btnHideMenu }
           hideMenu={ hideMenu }
           visible={ visible } />
    );
  }
}

const masStateToProps = ({ navigation }) => {
  return {
    activeItem : navigation.activeItem,
    visible: navigation.visible
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    onNavClick: (activeItem) =>
      handleNavClick(dispatch, activeItem),

    hideMenu: () =>
      dispatch(toggleVisibleMenu())
  };
};

export default connect(
    masStateToProps,
    mapDispatchToPros
)(NavContainer);