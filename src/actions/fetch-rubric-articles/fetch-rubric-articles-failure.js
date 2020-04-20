const fetchRubricArticlesFailure = (error) => {
  return {
    type: 'FETCH_RUBRIC_ARTICLES_FAILURE',
    payload: error
  };
};

export default fetchRubricArticlesFailure;