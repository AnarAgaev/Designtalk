const updateLastArticles = (state, action) => {

  if (state === undefined) {
    return {
      articles: [],
      isTitleHover: false,
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_LAST_ARTICLES_REQUEST':
      return {
        ...state.lastArticles,
        loading: true
      };

    case 'FETCH_LAST_ARTICLES_SUCCESS':
      const { payload: articles } = action;
      return {
        ...state.lastArticles,
        articles: [
          ...articles
        ],
        loading: false
      };

    case 'FETCH_LAST_ARTICLES_FAILURE':
      return {
        ...state.lastArticles,
        loading: false,
        error: action.payload
      };

    case 'HANDLE_TITLE_OVER':
      return {
        ...state.lastArticles,
        isTitleHover: true
      };

    case 'HANDLE_TITLE_OUT':
      return {
        ...state.lastArticles,
        isTitleHover: false
      };

    default:
      return state.lastArticles;
  }
};

export default updateLastArticles;