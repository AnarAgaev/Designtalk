const fetchPopularSuccess = ({ results }) => {

  return {
    type: 'FETCH_POPULAR_SUCCESS',
    payload: results
  };
};

export default fetchPopularSuccess;