const handleShowArticlesItem = (itemId) => {
  return {
    type: 'SHOW_ARTICLES_ITEM',
    payload: itemId
  };
};

export default handleShowArticlesItem;