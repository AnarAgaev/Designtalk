import togglePopularSlide from "./toggle-popular-slide";

const popularSlide = (dispatch) => (
  direction, position,
  currentPosition,
  itemWidth, windowWidth) => {

  dispatch(
    togglePopularSlide(
      direction, position,
      currentPosition,
      itemWidth, windowWidth
    )
  );
};

export default popularSlide;