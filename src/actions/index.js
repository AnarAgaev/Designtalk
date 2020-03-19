const articlesLoaded = (articles) => {
  return {
    type: 'ARTICLES_LOADED',
    payload: articles
  };
};

export {
  articlesLoaded
};