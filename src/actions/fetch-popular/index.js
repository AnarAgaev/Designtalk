import fetchPopularRequest from "./fetch-popular-request";
import fetchPopularSuccess from "./fetch-popular-success";
import fetchPopularFailure from "./fetch-popular-failure";

const fetchPopular = (dispatch, blogService) => () => {

  dispatch(fetchPopularRequest());

  blogService.getArticles('/popular/')
    .then((response) => {
      dispatch(fetchPopularSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchPopularFailure(error));
    });
};

export default fetchPopular;