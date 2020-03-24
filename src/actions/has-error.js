const hasError = (error) => {
  return {
    type: 'HAS_ERROR',
    payload: error
  };
};

export default hasError;