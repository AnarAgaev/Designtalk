const fetchArticleFailure = (error) => {
  return {
    type: 'FETCH_ARTICLE_FAILURE',
    payload: error
  };
};

export default fetchArticleFailure;