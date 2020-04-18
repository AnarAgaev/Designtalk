import fetchArticlesSuccess from "./fetch-articles-success";
import fetchArticlesRequest from "./fetch-articles-request";
import fetchArticlesFailure from "./fetch-articles-failure";
import handleShowArticlesItem from "./handle-show-articles-item";
import trimArticlesHash from "./trim-articles-hash";

const fetchArticles = (dispatch, blogService, url) => () => {
  dispatch(fetchArticlesRequest());

  blogService.getArticles(url)
    .then((response) => {
      dispatch(fetchArticlesSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchArticlesFailure(error));
    });
};

const showArticleItem = (
    dispatch,
    itemId
  ) => {

  dispatch(handleShowArticlesItem(itemId));
};

export {
  fetchArticles,
  showArticleItem,
  trimArticlesHash,
};