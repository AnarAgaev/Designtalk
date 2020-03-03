import React from "react";

import './modal-message.scss';

const ModalMessage = ({ modalMsg, modalVisible, onModalHide }) => {
  const modalClass = modalVisible ? 'modal visible' : 'modal';

  return (
    <div className={ modalClass }>
      <div className="modal__dialog">
        <div className="modal__content">
          <div className="modal__body">
            <p>{ modalMsg }</p>
          </div>
          <div className="modal__footer">
            <button type="button" className="button" onClick={ onModalHide }>Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMessage;