const fetchLastRubricArticleSuccess = (response) => {
  return {
    type: 'FETCH_LAST_RUBRIC_ARTICLE_SUCCESS',
    payload: response
  };
};

export default fetchLastRubricArticleSuccess;