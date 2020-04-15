import React, { Component } from "react";
import './modal-message.scss';

class ModalMessage extends Component {
  btnClose = React.createRef();

  componentDidUpdate() {
    const node = this
      .btnClose
      .current;

    this.props.visible
      ? node.focus()
      : node.blur();
  }

  render() {
    const {
      message,
      clazz,
      modalMsgHide
    } = this.props;

    return (
      <div className={ clazz }>
        <div className="modal__dialog">
          <div className="modal__content">
            <div className="modal__body">
              <p>{ message }</p>
            </div>
            <div className="modal__footer">
              <button
                ref={ this.btnClose }
                type="button"
                className="button"
                onClick={ modalMsgHide }>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default ModalMessage;