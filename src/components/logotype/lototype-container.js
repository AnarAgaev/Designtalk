import React from "react";
import Logotype from "./logotype";
import { connect } from "react-redux";
import { handleNavClick } from "../../actions";

const LogotypeContainer = ({
    handleNavClick
  }) => {

  return (
    <Logotype
      onClick={ handleNavClick } />
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavClick: () =>
      handleNavClick(dispatch, null)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(LogotypeContainer);