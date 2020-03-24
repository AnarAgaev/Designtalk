import fetchArticlesSuccess from "./fetch-articles-success";
import fetchArticlesRequest from "./fetch-articles-request";
import fetchArticlesFailure from "./fetch-articles-failure";

const fetchArticles = (blogService, dispatch) => () => {
  dispatch(fetchArticlesRequest());

  blogService.getArticles()
    .then((response) => {
      dispatch(fetchArticlesSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchArticlesFailure(error));
    });
};

export default fetchArticles;