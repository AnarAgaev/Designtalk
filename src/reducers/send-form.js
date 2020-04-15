const sendForm = (state, action) => {
  if (state === undefined) {
    return {
      loading: false,
    };
  }

  switch (action.type) {

    case 'SEND_FORM_REQUEST':
      return {
        loading: true,
      };

    case 'SEND_FORM_RESULT':
      return {
        loading: false
      };

    default:
      return state.sendForm;
  }
};

export default sendForm;