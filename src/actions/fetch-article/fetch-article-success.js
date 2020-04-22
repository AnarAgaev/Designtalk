const fetchArticleSuccess = (payload) => {
  return {
    type: 'FETCH_ARTICLE_SUCCESS',
    payload
  };
};

export default fetchArticleSuccess;