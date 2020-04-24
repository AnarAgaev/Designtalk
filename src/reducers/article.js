const updateArticle = (state, action) => {

  if (state === undefined) {
    return {
      id: null,
      url: null,
      rubric: [],
      title: null,
      subtitle: null,
      preview: null,
      picture: null,
      date: null,
      keywords: null,
      description: null,
      copywriter: [],
      author: [],
      photographer: [],
      stylist: [],
      content: null,
      loading: false,
      error: null,
      notFound: false
    };
  }

  switch ( action.type ) {
    case 'FETCH_ARTICLE_REQUEST':
      return {
        ...state.article,
        loading: true
      };

    case 'FETCH_ARTICLE_SUCCESS':
      return {
        ...state.article,
        ...action.payload,
        loading: false,
      };

    case 'FETCH_ARTICLE_FAILURE':
      return {
        ...state.article,
        loading: false,
        error: action.payload
      };

    case 'SET_REDIRECT_TO_NOT_FOUND':
      return {
        ...state.article,
        notFound: true,
        loading: false,
      };

    case 'RESET_REDIRECT_TO_NOT_FOUND':
      return {
        ...state.article,
        notFound: false
      };

    default:
      return state.article;
  }
};

export default updateArticle;