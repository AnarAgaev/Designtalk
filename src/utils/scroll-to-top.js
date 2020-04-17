const scrollToTop = () => {

  const offsetTop = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );

  const scrollSpeed = 100;

  if (offsetTop > 0) {
    window.scrollBy(0,( (offsetTop + scrollSpeed)/-10 ));
    setTimeout(scrollToTop,20);
  }

  return false;
};

export default scrollToTop;