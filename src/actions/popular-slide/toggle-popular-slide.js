const togglePopularSlide = (
    direction,
    position,
    currentPosition,
    itemWidth,
    windowWidth
  ) => {

  return {
    type: 'TOGGLE_POPULAR_SLIDE',
    payload: {
      direction,
      position,
      currentPosition,
      itemWidth,
      windowWidth
    }
  };
};

export default togglePopularSlide;