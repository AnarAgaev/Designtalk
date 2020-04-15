import React, { Component } from "react";
import { connect } from "react-redux";
import ModalMessage from "./modal-message";
import { modalMsgHide } from "../../actions/modal-msg"

class ModalMessageContainer extends Component {
 render() {
   const {
     message,
     visible,
     modalMsgHide
   } = this.props;

   return <ModalMessage
     message={ message }
     visible={ visible }
     modalMsgHide={ modalMsgHide } />;
 }
}

const mapStateToProps = ({
    modalMsg: { message, visible }
  }) => {

  return {
    message,
    visible
  };
};

const mapDispatchToProps = {
  modalMsgHide
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalMessageContainer);