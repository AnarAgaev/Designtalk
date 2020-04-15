const handleModalMsg = (state, action) => {
  if (state === undefined) {
    return {
      message: '',
      visible: false
    };
  }

  switch (action.type) {

    case 'MODAL_MSG_SHOW':
      const { payload } = action;
      return {
        message: payload,
        visible: true
      };

    case 'MODAL_MSG_HIDE':
      return {
        message: '',
        visible: false
      };

    default:
      return state.modalMsg;
  }
};

export default handleModalMsg;