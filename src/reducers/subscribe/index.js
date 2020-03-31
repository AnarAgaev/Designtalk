const handleSubscribe = (state, action) => {
  if (state === undefined) {
    return {
      email: 'test@mail',
      error: true
    };
  }

  switch (action.type) {

    case 'HANDLE_INPUT_CHANGE':
      const { email, error } = action;
      return {
        email,
        error
      };



    default:
      return state.subscribe;
  }
};

export default handleSubscribe;