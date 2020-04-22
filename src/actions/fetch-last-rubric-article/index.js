import fetchLastRubricArticleRequest from "./fetch-last-rubric-article-request";
import fetchLastRubricArticleSuccess from "./fetch-last-rubric-article-success";
import fetchLastRubricArticleFailure from "./fetch-last-rubric-article-failure";
import handleTitleOver from "./handle-title-over";
import handleTitleOut from "./handle-title-out";

const fetchLastRubricArticle = (dispatch, blogService, rubric) => {

  dispatch(fetchLastRubricArticleRequest());

  blogService.getData(`/last-rubric-article/?rubric=${rubric}`)
    .then((response) => {
      dispatch(fetchLastRubricArticleSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchLastRubricArticleFailure(error));
    });
};

const handleRubricTitleHover = (dispatch, event) => {
  if (event) {
    dispatch(handleTitleOver());
  } else {
    dispatch(handleTitleOut());
  }
};

export {
  fetchLastRubricArticle,
  handleRubricTitleHover
};