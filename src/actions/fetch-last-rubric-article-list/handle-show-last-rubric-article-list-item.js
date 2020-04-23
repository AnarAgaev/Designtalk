const handleShowRubricArticleListItem = (itemId) => {
  return {
    type: 'SHOW_RUBRIC_ARTICLE_LIST_ITEM',
    payload: itemId
  };
};

export default handleShowRubricArticleListItem;