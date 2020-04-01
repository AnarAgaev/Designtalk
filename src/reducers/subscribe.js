const handleSubscribe = (state, action) => {
  if (state === undefined) {
    return {
      email: '',
      loading: false,
      error: false
    };
  }

  switch (action.type) {

    case 'HANDLE_INPUT_CHANGE':
      const { email, error } = action;
      return {
        ...state.subscribe,
        email,
        error
      };

    case 'FETCH_SUBSCRIBE_REQUEST':
      return {
        ...state.subscribe,
        loading: true
      };

    case 'FETCH_SUBSCRIBE_SUCCESS':
    case 'FETCH_SUBSCRIBE_FAILURE':
      return {
        ...state.subscribe,
        loading: false
      };

    default:
      return state.subscribe;
  }
};

export default handleSubscribe;