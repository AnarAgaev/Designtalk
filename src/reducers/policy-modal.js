const policyModal = (state, action) => {
  if (state === undefined) {
    return {
      isCookies: false,
      visible: false
    };
  }

  switch (action.type) {
    case 'SET_COOKIES_POLICY_MODAL':
      return {
        isCookies: true,
        visible: false
      };

    case 'VISIBLE_POLICY_MODAL':
      return {
        ...state.policyModal,
        visible: true
      };

    default:
      return state.policyModal;
  }
};

export default policyModal;