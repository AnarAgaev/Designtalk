import React from "react";
import { connect } from "react-redux";
import { toggleVisibleMenu } from "../../actions";
import "./btn-show-menu.scss";

const BtnShowMenu = ({ visible, showMenu }) => {
  return (
    <div className={ `toggle-nav ${visible}` }
         onClick={ showMenu } />
  );
};

const mapDispatchToProps = {
  showMenu: toggleVisibleMenu
};

export default connect(
  undefined,
  mapDispatchToProps
)(BtnShowMenu);