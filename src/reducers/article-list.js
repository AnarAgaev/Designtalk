const updateArticleList = (state, action) => {

  if (state === undefined) {
    return {
      next: null,
      previous: null,
      articles: [],
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return {
        ...state.articleList,
        loading: true
      };

    case 'FETCH_ARTICLES_SUCCESS':
      const { next, previous, articles } = action;
      return {
        ...state.articleList,
        next,
        previous,
        articles: [
          ...state.articleList.articles,
          ...articles
        ],
        loading: false
      };

    case 'FETCH_ARTICLES_FAILURE':
      return {
        ...state.articleList,
        loading: false,
        error: action.payload
      };

    default:
      return state.articleList;
  }
};

export default updateArticleList;