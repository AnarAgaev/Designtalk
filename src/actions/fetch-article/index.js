import fetchArticleSuccess from "./fetch-article-success";
import fetchArticleRequest from "./fetch-article-request";
import fetchArticleFailure from "./fetch-article-failure";
import setRedirectToNotFound from "./set-redirect-to-not-found";
import resetRedirectToNotFound from "./reset-redirect-to-not-found";

const fetchArticle = (dispatch, blogService, url) => () => {

  dispatch(fetchArticleRequest());

  blogService.getData(`/article/?url=${url}`)
    .then((response) => {

      if (response === false) {
        dispatch(setRedirectToNotFound());
      } else {
        dispatch(fetchArticleSuccess(response));
      }

    })
    .catch((error) => {
      dispatch(fetchArticleFailure(error));
    });
};

export {
  fetchArticle,
  resetRedirectToNotFound
};