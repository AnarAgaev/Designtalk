const updatePopularList = (state, action) => {
  if (state === undefined) {
    return {
      popular: [],
      popularListPosition: 0,
      popularListItemWidth: 332,
      actionBlocker: true,
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_POPULAR_REQUEST':
      return {
        ...state.popularList,
        loading: true
      };

    case 'FETCH_POPULAR_SUCCESS':
      const { payload: articles } = action;
      return {
        ...state.popularList,
        popular: [
          ...articles
        ],
        loading: false
      };

    case 'FETCH_POPULAR_FAILURE':
      return {
        ...state.popularList,
        loading: false,
        error: action.payload
      };

    case 'TOGGLE_POPULAR_SLIDE':
      const { direction, position,
        currentPosition, itemWidth,
        windowWidth } = action.payload;

      const offset = currentPosition + itemWidth * direction;

      const move = direction === -1 && position > windowWidth
        || direction === 1 && currentPosition;

      if (move) {
        return {
          ...state.popularList,
          popularListPosition: offset
        };
      }

      return {
        ...state.popularList
      };

    default:
      return state.popularList;
  }
};

export default updatePopularList;