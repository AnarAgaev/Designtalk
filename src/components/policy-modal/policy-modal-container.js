import React, { Component } from "react";
import { connect } from "react-redux"
import { getCookie } from "../../utils";
import PolicyModal from "./policy-modal";
import {
  hidePolicyModal,
  showPolicyModal,
  setCookiePolicyModal } from "../../actions";

class PolicyModalContainer extends Component {

  componentDidMount() {
    const {
      isCookies,
      showPolicyModal,
      dispatch
    } = this.props;

    if (!isCookies && !getCookie('policy')) {
      setTimeout(() => showPolicyModal(),
        3000);
    } else {
      dispatch(setCookiePolicyModal());
    }
  }

  render() {
    const {
      visible,
      hidePolicyModal
    } = this.props;

    const clazz = visible ?
      "policy-modal visible" :
      "policy-modal";

    return <PolicyModal
      hidePolicyModal={ hidePolicyModal }
      clazz={ clazz } />;
  }
}

const mapStateToProps = ({ policyModal: {
    isCookies,
    visible
  }}) => {

  return { isCookies, visible };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hidePolicyModal: () =>
      hidePolicyModal(dispatch),
    showPolicyModal: () =>
      showPolicyModal(dispatch),
    dispatch: dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolicyModalContainer);