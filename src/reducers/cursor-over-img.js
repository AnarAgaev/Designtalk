const handleCursorOverImg = (state, action) => {

  if (state === undefined) {
    return {
      cursorVisible: false,
      cursorX: 0,
      cursorY: 0,
    };
  }

  if (action.type === 'HANDLE_CURSOR_OVER_IMG') {
    const {cursorVisible, cursorX, cursorY} = action;
    return {
      cursorVisible,
      cursorX,
      cursorY
    };
  }

  return state.cursorOnImg;
};

export default handleCursorOverImg;