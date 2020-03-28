const updatePopularList = (state, action) => {
  if (state === undefined) {
    return {
      popular: [],
      popularListPosition: 0,
      popularListItemWidth: 332,
      slipBlocker: true,
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_POPULAR_REQUEST':

      console.log('Fetching popular articles...');

      return {
        ...state.popularList,
        loading: true
      };

    case 'FETCH_POPULAR_SUCCESS':
      const { payload: articles } = action;

      console.log('Success popular articles...');

      return {
        ...state.popularList,
        popular: [
          ...articles
        ],
        loading: false
      };

    case 'FETCH_POPULAR_FAILURE':

      console.log('Failure popular articles...');

      return {
        ...state.popularList,
        loading: false,
        error: action.payload
      };

    default:
      return state.popularList;
  }
};

export default updatePopularList;