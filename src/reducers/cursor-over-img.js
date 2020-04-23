const updateCursor = (state, action) => {

  if (state === undefined) {
    return {
      cursorVisible: false,
      cursorX: 0,
      cursorY: 0,
    };
  }

  switch (action.type) {
    case 'HANDLE_CURSOR_OVER_IMG':
      return {
        cursorVisible : true,
        cursorX : action.cursorX,
        cursorY : action.cursorY,
      };

    case 'HANDLE_CURSOR_OUT_IMG':
      return {
        ...state.cursorOnImg,
        cursorVisible : false
      };

    default:
      return {
        ...state.cursorOnImg
      }
  }
};

export default updateCursor;