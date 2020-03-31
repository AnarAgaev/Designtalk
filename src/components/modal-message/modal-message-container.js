import React, { Component } from "react";
import { connect } from "react-redux";
import ModalMessage from "./modal-message";

class ModalMessageContainer extends Component {
 render() {
   const { message, visible } = this.props;

   return <ModalMessage
     message={ message }
     visible={ visible } />;
 }
}

const mapStateToProps = ({ modalMsg: { message, visible } }) => {
  return {
    message,
    visible
  };
};


export default connect(
  mapStateToProps
)(ModalMessageContainer);