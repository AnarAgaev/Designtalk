const updateRubricArticleList = (state, action) => {

  const getCleanState = () => {
    return {
      next: null,
      previous: null,
      rubricId: null,
      rubricLink: null,
      rubricName: null,
      articles: [],
      loading: false,
      error: null
    };
  };

  if (state === undefined) {
    return getCleanState();
  }

  switch (action.type) {

    case 'FETCH_RUBRIC_ARTICLES_REQUEST':
      return {
        ...state.rubricArticleList,
        loading: true
      };

    case 'FETCH_RUBRIC_ARTICLES_SUCCESS':
      const {
        next, previous,
        rubricId, rubricLink,
        rubricName, articles
      } = action;

      return {
        ...state.rubricArticleList,
        next, previous,
        rubricId, rubricLink,
        rubricName,
        articles: [
          ...state.rubricArticleList.articles,
          ...articles
        ],
        loading: false
      };

    case 'FETCH_RUBRIC_ARTICLES_FAILURE':
      return {
        ...state.rubricArticleList,
        loading: false,
        error: action.payload
      };

    case 'SHOW_RUBRIC_ARTICLES_ITEM':
      const rubricArticlesWithShownItems = state
        .rubricArticleList
        .articles
        .filter((article) => {
            if (article.id === action.payload) {
              article.visible = true
            }
            return article;
          }
        );
      return {
        ...state.rubricArticleList,
        articles: rubricArticlesWithShownItems
      };

    case 'RESET_RUBRIC_ARTICLES_DATA':
      return getCleanState();

    default:
      return state.rubricArticleList;
  }
};

export default updateRubricArticleList;