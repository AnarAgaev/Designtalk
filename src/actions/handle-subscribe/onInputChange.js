const onInputChange = (email, error) => {
  return {
    type: 'HANDLE_INPUT_CHANGE',
    email: email,
    error: error
  };
};

export default onInputChange;