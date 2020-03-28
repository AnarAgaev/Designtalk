import React, { Component } from "react";
import { connect } from 'react-redux';
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import PopularList from "./popular-list";
import PopularListItem from "../popular-list-item";
import { compose, renderElementList } from "../../utils";
import { fetchPopular } from "../../actions";


class PopularListContainer extends Component {

  componentDidMount() {
    this.props.fetchPopular();
  }

  render() {
    const { popular, error } = this.props;

    const popularList = renderElementList(
      popular,
      PopularListItem
    );

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <PopularList articles={ popularList } />
    );
  }
}

const mapStateToProps = ({ popularList: { popular, error } }) => {
  return { popular, error };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchPopular: fetchPopular(dispatch, blogService)
  };
};


export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PopularListContainer);