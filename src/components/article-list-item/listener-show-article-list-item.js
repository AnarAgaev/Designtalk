const listenerShowArticleListItems = (
  node,
  showItem
) => {

  const screenHeight = document
    .documentElement
    .clientHeight;

  const clientY = node
    .getBoundingClientRect()
    .y;

  if (clientY < screenHeight) {
    showItem(node.id);
  }
};

export default listenerShowArticleListItems;