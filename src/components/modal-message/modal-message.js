import React from "react";

import './modal-message.scss';

const ModalMessage = ({ message, visible, modalMsgHide }) => {
  const modalClass = visible ?
    'modal visible' :
    'modal';

  return (
    <div className={ modalClass }>
      <div className="modal__dialog">
        <div className="modal__content">
          <div className="modal__body">
            <p>{ message }</p>
          </div>
          <div className="modal__footer">
            <button
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

export default ModalMessage;