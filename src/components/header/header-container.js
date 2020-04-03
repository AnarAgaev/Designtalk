import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import { headerScrollProcessing } from "../../actions";

class HeaderContainer extends Component {

  componentDidMount() {
    window.addEventListener(
      'scroll',
      () => {
        const { headerScrollProcessing,
                scrolled } = this.props;

        return headerScrollProcessing(scrolled);
      }
    );
  }

  render() {
    return (
      <Header hide={ this.props.hide } />
    );
  }
}

const mapStateToProps = ({ header: { hide, scrolled } }) => {
  return { hide, scrolled };
};

const mapDispatchToProps = (dispatch) => {
  return {
    headerScrollProcessing: (scrolled ) =>
      headerScrollProcessing(dispatch, scrolled )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);