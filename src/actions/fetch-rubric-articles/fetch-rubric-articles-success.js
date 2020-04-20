const fetchRubricArticlesSuccess = ({ next, previous, rubricId, rubricLink, rubricName, results }) => {
  return {
    type: 'FETCH_RUBRIC_ARTICLES_SUCCESS',
    next,
    previous,
    rubricId,
    rubricLink,
    rubricName,
    articles: results
  };
};

export default fetchRubricArticlesSuccess;