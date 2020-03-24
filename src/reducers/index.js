const initialState = {
  next: "/articles/?page=2",
  previous: null,
  articles: [],

  cursorVisible: false,
  cursorX: 0,
  cursorY: 0,

  loading: false,

  error: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'DATA_REQUESTED':
      return {
        ...state,
        loading: true
      };

    case 'ARTICLES_LOADED':
      const { next, previous, articles } = action;
      return {
        ...state,
        next,
        previous,
        articles,
        loading: false
      };

    case 'HAS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case 'HANDLE_CURSOR_OVER_IMG':
      const { cursorVisible, cursorX, cursorY } = action;
      return {
        ...state,
        cursorVisible,
        cursorX,
        cursorY
      };

    default:
     return state;
  }
};

 export default reducer;