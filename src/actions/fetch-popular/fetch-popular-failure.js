const fetchPopularFailure = (error) => {
  return {
    type: 'FETCH_POPULAR_FAILURE',
    payload: error
  };
};

export default fetchPopularFailure;