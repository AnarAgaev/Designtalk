const updateArticle = (state, action) => {

  const getCleanState = () => {
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
      error: null
    };
  };

  if (state === undefined) {
    return getCleanState();
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

    case 'RESET_ARTICLE_DATA':
      return getCleanState();

    default:
      return state.article;
  }
};

export default updateArticle;