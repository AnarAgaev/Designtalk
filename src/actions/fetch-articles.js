import fetchArticlesSuccess from "./fetch-articles-success";
import fetchArticlesRequest from "./fetch-articles-request";
import fetchArticlesFailure from "./fetch-articles-failure";

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

export default fetchArticles;