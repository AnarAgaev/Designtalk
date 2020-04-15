import confirmSubscriptionSuccess from "./confirm-subscription-success";
import confirmSubscriptionFailure from "./confirm-subscription-failure";

const confirmSubscription = (dispatch, blogService, url) => () => {

  blogService.confirmSubscription(url)
    .then((response) => {

      response.status
        ? dispatch(confirmSubscriptionSuccess())
        : dispatch(confirmSubscriptionFailure());
    })
    .catch((error) => {
      console.log(error);

      dispatch(confirmSubscriptionFailure());
    });
};

export default confirmSubscription;