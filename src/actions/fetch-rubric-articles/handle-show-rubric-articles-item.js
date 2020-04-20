const handleShowRubricArticlesItem = (itemId) => {
  return {
    type: 'SHOW_RUBRIC_ARTICLES_ITEM',
    payload: itemId
  };
};

export default handleShowRubricArticlesItem;