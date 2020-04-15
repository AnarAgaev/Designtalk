import React from "react";
import PrivacyList from "./privacy-list";
import { connect } from "react-redux";
import { handleNavClick } from "../../actions";

const PrivacyListContainer = ({
    handleNavClick
  }) => {

  return (
    <PrivacyList
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
)(PrivacyListContainer);