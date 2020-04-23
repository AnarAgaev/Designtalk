const fetchLastRubricArticleListFailure = (error) => {
  return {
    type: 'FETCH_LAST_RUBRIC_ARTICLE_LIST_FAILURE',
    payload: error
  };
};

export default fetchLastRubricArticleListFailure;