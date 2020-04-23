const cursorOverImg = (X, Y) => {
  return {
    type: 'HANDLE_CURSOR_OVER_IMG',
    cursorX: X,
    cursorY: Y,
  };
};

export default cursorOverImg;