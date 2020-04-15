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

   const clazz = visible
     ? 'modal visible'
     : 'modal';

   return <ModalMessage
     modalMsgHide={ modalMsgHide }
     message={ message }
     clazz={ clazz }
     visible={ visible } />;
 }
}

const mapStateToProps = ({
  modalMsg: {
    message,
    visible
  }}) => {

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