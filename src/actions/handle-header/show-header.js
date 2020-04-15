const showHeader = (scrollHeight) => {
  return {
    type: 'SHOW_HEADER',
    payload: scrollHeight
  };
};

export default showHeader;