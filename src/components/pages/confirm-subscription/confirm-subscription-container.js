import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "../../../utils";
import { confirmSubscription } from "../../../actions";
import withBlogService from "../../hoc";
import ConfirmSubscriptionSuccess from "./confirm-subscription-success";
import ConfirmSubscriptionFailure from "./confirm-subscription-failure";
import Spinner from "../../spinner/spinner";

class ConfirmSubscriptionContainer extends Component {

  componentDidMount() {
    const {
      subscriptionId,
      confirmSubscription
    } = this.props;

    const url = "/scripts/confirm-subscription.php?sid="
      + subscriptionId;

    confirmSubscription(url)();
  }

  render() {
    const { success } = this.props;

    if (success !== null) {
      return success
        ? <ConfirmSubscriptionSuccess />
        : <ConfirmSubscriptionFailure />;
    }

    return (
      <Spinner
        clazz={ "spinner visible nested" } />
    );
  }
}

const mapStateToProps = ({
    confirmSubscription: { success }
  }) => {

  return { success };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    confirmSubscription: (url) => confirmSubscription(
      dispatch,
      blogService,
      url
    )
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ConfirmSubscriptionContainer);