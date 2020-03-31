import React, { Component } from "react";
import { connect } from "react-redux";
import Subscribe from "./subscribe";
import {
  handleInputChange,
  handleInputBlur,
  handleFormSubmit
} from "../../actions";

class SubscribeContainer extends Component {
  render() {
    const {
      email, error,
      handleInputChange,
      handleInputBlur,
      handleFormSubmit
    } = this.props;

    return <Subscribe
      email={ email }
      error={ error }
      handleInputChange={ handleInputChange }
      handleInputBlur={ handleInputBlur }
      handleFormSubmit={ handleFormSubmit }/>
  }
}

const mapStateToProps = ({ subscribe: { email, error } }) => {
  return {
    email,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (event) => handleInputChange(dispatch, event),
    handleInputBlur: (email) => handleInputBlur(dispatch, email),
    handleFormSubmit: (event, email, error) => handleFormSubmit(dispatch, event, email, error)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeContainer);