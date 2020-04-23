import fetchArticleSuccess from "./fetch-article-success";
import fetchArticleRequest from "./fetch-article-request";
import fetchArticleFailure from "./fetch-article-failure";

const fetchArticle = (dispatch, blogService, url) => () => {

  dispatch(fetchArticleRequest());

  blogService.getData(`/article/?url=${url}`)
    .then((response) => {
      dispatch(fetchArticleSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchArticleFailure(error));
    });
};

export default fetchArticle;