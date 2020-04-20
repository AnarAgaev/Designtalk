const fetchLastRubricArticleFailure = (error) => {
  return {
    type: 'FETCH_LAST_RUBRIC_ARTICLE_FAILURE',
    payload: error
  };
};

export default fetchLastRubricArticleFailure;