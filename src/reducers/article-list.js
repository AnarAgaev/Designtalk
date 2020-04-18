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
        .filter((article) => {
            if (article.id === action.payload) {
              article.visible = true
            }
            return article;
          }
        );
      return {
        ...state.articleList,
        articles: articlesWithShownItems
      };

    case 'TRIM_ARTICLES_HASH':
      const croppedArticles = state
        .articleList
        .articles
        .slice(0, 7);
      croppedArticles.forEach((article) => {
        article.visible = false;
        return article;
      });
      return {
        ...state.articleList,
        next: action.payload,
        previous: null,
        articles: croppedArticles
      };

    default:
      return state.articleList;
  }
};

export default updateArticleList;