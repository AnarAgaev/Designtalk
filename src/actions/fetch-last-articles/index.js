import fetchLastArticlesRequest from "./fetch-last-articles-request";
import fetchLastArticlesSuccess from "./fetch-last-articles-success";
import fetchLastArticlesFailure from "./fetch-last-articles-failure";
import handleTitleOver from "./handle-title-over";
import handleTitleOut from "./handle-title-out";

const fetchLastArticles = (dispatch, blogService) => {

  dispatch(fetchLastArticlesRequest());

  blogService.getArticles('/last-articles/')
    .then((response) => {
      dispatch(fetchLastArticlesSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchLastArticlesFailure(error));
    });
};

const handleTitleHover = (dispatch, event) => {
  if (event) {
    dispatch(handleTitleOver());
  } else {
    dispatch(handleTitleOut());
  }
};

export {
  handleTitleHover,
  fetchLastArticles
};