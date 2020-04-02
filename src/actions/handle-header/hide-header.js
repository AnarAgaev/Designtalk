const hideHeader = (scrollHeight) => {
  return {
    type: 'HIDE_HEADER',
    payload: scrollHeight
  };
};

export default hideHeader;