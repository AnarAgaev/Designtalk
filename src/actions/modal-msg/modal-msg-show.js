const modalMsgShow = (msg) => {
  return {
    type: 'MODAL_MSG_SHOW',
    payload: msg
  };
};

export default modalMsgShow;