const updateLastRubricArticle = (state, action) => {

  if (state === undefined) {
    return {
      article: {},
      rubricId: null,
      rubricLink: null,
      rubricTitle: null,
      isTitleHover: false,
      loading: false,
      error: null,
      notFound: false
    };
  }

  switch (action.type) {
    case 'FETCH_LAST_RUBRIC_ARTICLE_REQUEST':
      return {
        ...state.lastRubricArticle,
        loading: true
      };

    case 'FETCH_LAST_RUBRIC_ARTICLE_SUCCESS':
      const {
        article,
        rubricId,
        rubricLink,
        rubricTitle
      } = action.payload;

      return {
        ...state.lastRubricArticle,
        article,
        rubricId,
        rubricLink,
        rubricTitle,
        loading: false
      };

    case 'FETCH_LAST_RUBRIC_ARTICLE_FAILURE':
      return {
        ...state.lastRubricArticle,
        loading: false,
        error: action.payload
      };

    case 'HANDLE_TITLE_OVER':
      return {
        ...state.lastRubricArticle,
        isTitleHover: true
      };

    case 'HANDLE_TITLE_OUT':
      return {
        ...state.lastRubricArticle,
        isTitleHover: false
      };

    case 'SET_REDIRECT_TO_NOT_FOUND_AT_RUBRIC':
      return {
        ...state.lastRubricArticle,
        notFound: true,
        loading: false,
      };

    case 'RESET_REDIRECT_TO_NOT_FOUND_AT_RUBRIC':
      return {
        ...state.lastRubricArticle,
        notFound: false
      };

    default:
      return state.lastRubricArticle;
  }
};

export default updateLastRubricArticle;