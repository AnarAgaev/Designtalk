const fetchLastArticlesFailure = (error) => {
  return {
    type: 'FETCH_LAST_ARTICLES_FAILURE',
    payload: error
  };
};

export default fetchLastArticlesFailure;