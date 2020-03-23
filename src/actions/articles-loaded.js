const articlesLoaded = (response) => {
  const { next, previous, results } = response;

  return {
    type: 'ARTICLES_LOADED',
    next: next,
    previous: previous,
    articles: results
  };
};

export default articlesLoaded;