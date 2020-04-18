const listenerShowArticleListItems = (
    node,
    showItem
  ) => {

  const shown = node.classList.contains('visible');

  if (!shown) {
    const screenHeight = document
      .documentElement
      .clientHeight;

    const clientY = node
      .getBoundingClientRect()
      .y;

    if (clientY < screenHeight) {
      showItem(node.id);
    }
  }
};

export default listenerShowArticleListItems;