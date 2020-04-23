const updateLastRubricArticleList = (state, action) => {

  if (state === undefined) {
    return {
      articles: [],
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_LAST_RUBRIC_ARTICLE_LIST_REQUEST':
      return {
        ...state.lastRubricArticleList,
        loading: true
      };

    case 'FETCH_LAST_RUBRIC_ARTICLE_LIST_SUCCESS':
      const { articles } = action;
      return {
        ...state.lastRubricArticleList,
        articles: [
          ...articles
        ],
        loading: false
      };

    case 'FETCH_LAST_RUBRIC_ARTICLE_LIST_FAILURE':
      return {
        ...state.lastRubricArticleList,
        loading: false,
        error: action.payload
      };

    case 'SHOW_RUBRIC_ARTICLE_LIST_ITEM':
      const articlesWithShownItems = state
        .lastRubricArticleList
        .articles
        .filter((article) => {
            if (article.id === action.payload) {
              article.visible = true
            }
            return article;
          }
        );
      return {
        ...state.lastRubricArticleList,
        articles: articlesWithShownItems
      };

    default:
      return state.lastRubricArticleList;
  }
};

export default updateLastRubricArticleList;