const handleHeader = (state, action) => {
  if (state === undefined) {
    return {
      hide: false,
      scrolled: 0
    };
  }

  switch (action.type) {
    case 'SHOW_HEADER':
      return {
        hide: false,
        scrolled: action.payload
      };

    case 'HIDE_HEADER':
      return {
        hide: true,
        scrolled: action.payload
      };

    default:
      return state.header;
  }
};

export default handleHeader;