const renderArticleList = (list, component) => {

  if (!list.length) {
    return null;
  }

  return list.map((article) => {
    return component(article);
  });
};

export default renderArticleList;