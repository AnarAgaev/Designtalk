const trimArticlesHash = (nextPageUrl) => {
  return {
    type: 'TRIM_ARTICLES_HASH',
    payload: nextPageUrl
  };
};

export default trimArticlesHash;