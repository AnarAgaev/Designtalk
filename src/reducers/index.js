const initialState = {
  next: "/articles/?page=2",
  previous: null,
  articles: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ARTICLES_LOADED':
      const { next, previous, articles } = action;
      return { next, previous, articles };
    default:
     return state;
  }
};

 export default reducer;