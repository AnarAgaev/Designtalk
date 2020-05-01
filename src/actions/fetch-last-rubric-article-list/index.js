import fetchLastRubricArticleListRequest from "./fetch-last-rubric-article-list-request";
import fetchLastRubricArticleListSuccess from "./fetch-last-rubric-article-list-success";
import fetchLastRubricArticleListFailure from "./fetch-last-rubric-article-list-failure";
import handleShowRubricArticleListItem from "./handle-show-last-rubric-article-list-item";
import resetLastRubricArticleList from "./reset-last-rubric-article-list";

const fetchLastRubricArticleList = (dispatch, blogService, rubric) => {

  dispatch(fetchLastRubricArticleListRequest());

  blogService.getData(`/last-rubric-article-list/?rubric=${rubric}`)
    .then((response) => {

      if (response === false) {
        // If there isn't articles at the selected rubric, reset Articles in the state
        dispatch(resetLastRubricArticleList());
      } else {
        dispatch(fetchLastRubricArticleListSuccess(response));
      }

    })
    .catch((error) => {
      dispatch(fetchLastRubricArticleListFailure(error));
    });
};

const showRubricArticleListItem = (
  dispatch,
  itemId
) => {

  dispatch(handleShowRubricArticleListItem(itemId));
};

export {
  fetchLastRubricArticleList,
  showRubricArticleListItem
}