const fetchLastArticlesSuccess = ({ results }) => {
  return {
    type: 'FETCH_LAST_ARTICLES_SUCCESS',
    payload: results
  };
};

export default fetchLastArticlesSuccess;