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
                scrolled, painted } = this.props;

        return headerScrollProcessing(scrolled, painted);
      }
    );
  }

  render() {
    const { hide, painted } = this.props;

    return (
      <Header
        hide={ hide }
        painted={ painted } />
    );
  }
}

const mapStateToProps = ({ header:
    { hide, painted, scrolled }
  }) => {

  return { hide, painted, scrolled };
};

const mapDispatchToProps = (dispatch) => {
  return {
    headerScrollProcessing: (scrolled, painted) =>
      headerScrollProcessing(dispatch, scrolled, painted)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);