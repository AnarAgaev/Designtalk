const initialState = {
  next: "/articles/?page=2",
  previous: null,
  articles: [],

  cursorVisible: false,
  cursorX: 0,
  cursorY: 0,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ARTICLES_LOADED':
      const { next, previous, articles } = action;
      return { next, previous, articles };

    case 'HANDLE_CURSOR_OVER_IMG':
      const { cursorVisible, cursorX, cursorY, ...props } = state;
      return {
        cursorVisible: action.cursorVisible,
        cursorX: action.cursorX,
        cursorY: action.cursorY,
        ...props };

    default:
     return state;
  }
};

 export default reducer;