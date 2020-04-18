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

    case 'SHOW_ARTICLES_ITEM':
      const articlesWithShownItems = state
        .articleList
        .articles
        .filter((item) => {
            if (item.id === action.payload) {
              item.visible = true
            }
            return item;
          }
        );
      return {
        ...state.articleList,
        articles: articlesWithShownItems
      };

    default:
      return state.articleList;
  }
};

export default updateArticleList;