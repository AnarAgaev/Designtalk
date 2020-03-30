import fetchLastArticlesRequest from "./fetch-last-articles-request";
import fetchLastArticlesSuccess from "./fetch-last-articles-success";
import fetchLastArticlesFailure from "./fetch-last-articles-failure";

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

export default fetchLastArticles;