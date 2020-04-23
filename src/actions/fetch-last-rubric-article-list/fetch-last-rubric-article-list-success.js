const fetchLastRubricArticleListSuccess = (response) => {
  return {
    type: 'FETCH_LAST_RUBRIC_ARTICLE_LIST_SUCCESS',
    articles: response
  };
};

export default fetchLastRubricArticleListSuccess;