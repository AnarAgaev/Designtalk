const fetchArticlesFailure = (error) => {
  return {
    type: 'FETCH_ARTICLES_FAILURE',
    payload: error
  };
};

export default fetchArticlesFailure;