import fetchRubricArticlesSuccess from "./fetch-rubric-articles-success";
import fetchRubricArticlesRequest from "./fetch-rubric-articles-request";
import fetchRubricArticlesFailure from "./fetch-rubric-articles-failure";
import handleShowRubricArticlesItem from "./handle-show-rubric-articles-item";
import resetRubricArticlesData from "./reset-rubric-articles-data";

const fetchRubricArticles = (dispatch, blogService, url) => () => {

  dispatch(fetchRubricArticlesRequest());

  blogService.getArticles(url)
    .then((response) => {
      dispatch(fetchRubricArticlesSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchRubricArticlesFailure(error));
    });
};

const showRubricArticleItem = ( dispatch, itemId ) => {
  dispatch(handleShowRubricArticlesItem(itemId));
};

export {
  fetchRubricArticles,
  showRubricArticleItem,
  resetRubricArticlesData
};