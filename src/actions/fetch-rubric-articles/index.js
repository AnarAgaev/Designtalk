import fetchRubricArticlesSuccess from "./fetch-rubric-articles-success";
import fetchRubricArticlesRequest from "./fetch-rubric-articles-request";
import fetchRubricArticlesFailure from "./fetch-rubric-articles-failure";
import handleShowRubricArticlesItem from "./handle-show-rubric-articles-item";
import resetRubricArticlesData from "./reset-rubric-articles-data";
import resetRedirectToNotFoundAtRubricList from "./reset-redirect-to-not-found";
import setRedirectToNotFoundAtRubricList from "./set-redirect-to-not-found";

const fetchRubricArticles = (dispatch, blogService, url) => () => {

  dispatch(fetchRubricArticlesRequest());

  blogService.getArticles(url)
    .then((response) => {

      if (response === false) {
        dispatch(setRedirectToNotFoundAtRubricList());
      } else {
        dispatch(fetchRubricArticlesSuccess(response));
      }

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
  resetRubricArticlesData,
  resetRedirectToNotFoundAtRubricList
};