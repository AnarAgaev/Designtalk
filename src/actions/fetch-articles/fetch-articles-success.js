const fetchArticlesSuccess = ({ next, previous, results }) => {
  return {
    type: 'FETCH_ARTICLES_SUCCESS',
    next: next,
    previous: previous,
    articles: results
  };
};

export default fetchArticlesSuccess;