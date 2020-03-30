const cursorOverImg = (visible, X, Y) => {

  visible = typeof visible !== 'boolean' ?
    false : visible;

  return {
    type: 'HANDLE_CURSOR_OVER_IMG',
    cursorVisible: visible,
    cursorX: X,
    cursorY: Y,
  };
};

export default cursorOverImg;