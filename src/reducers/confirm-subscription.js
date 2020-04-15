const confirmSubscription = (state, action) => {
  if (state === undefined) {
    return {
      success: null
    };
  }

  switch (action.type) {

    case 'CONFIRM_SUBSCRIPTION_SUCCESS':
      return {
        success: true
      };

    case 'CONFIRM_SUBSCRIPTION_FAILURE':
      return {
        success: false
      };

    default:
      return state.confirmSubscription
  }

};

export default confirmSubscription;