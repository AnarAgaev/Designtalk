const handleHeader = (state, action) => {
  if (state === undefined) {
    return {
      hide: false,
      painted : false,
      scrolled: 0
    };
  }

  switch (action.type) {

    case 'PAINT_THE_HEADER_BACKGROUND':
      return {
        ...state.header,
        painted: true,
      };

    case 'ERASE_THE_HEADER_BACKGROUND':
      return {
        ...state.header,
        painted: false,
      };

    case 'SHOW_HEADER':
      return {
        ...state.header,
        hide: false,
        scrolled: action.payload
      };

    case 'HIDE_HEADER':
      return {
        ...state.header,
        hide: true,
        scrolled: action.payload
      };

    default:
      return state.header;
  }
};

export default handleHeader;