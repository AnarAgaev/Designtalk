import React, { Component } from "react";
import { connect } from 'react-redux';
import withBlogService from "../hoc";
import ErrorIndicator from "../error-indicator";
import PopularList from "./popular-list";
import PopularListItem from "../popular-list-item";
import { compose, renderElementList } from "../../utils";
import { fetchPopular, popularSlide } from "../../actions";


class PopularListContainer extends Component {

  componentDidMount() {
    const { popular, fetchPopular } = this.props;

    if (popular.length === 0) {
      fetchPopular();
    }
  }

  render() {
    const {
      popular,
      currentPosition,
      itemWidth,
      error,
      toggleSlide } = this.props;

    const popularList = renderElementList(
      popular,
      PopularListItem
    );

    if (error) {
      console.log(error);
      return <ErrorIndicator />
    }

    return (
      <PopularList
        articles={ popularList }
        currentPosition={ currentPosition }
        itemWidth={ itemWidth }
        toggleSlide={ toggleSlide }
      />
    );
  }
}

const mapStateToProps = ({ popularList: {
  popular,
  popularListPosition: currentPosition,
  popularListItemWidth: itemWidth,
  error
} }) => {
  return {
    popular,
    currentPosition,
    itemWidth,
    error
  };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchPopular: fetchPopular(dispatch, blogService),
    toggleSlide: popularSlide(dispatch)
  };
};

export default compose(
  withBlogService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PopularListContainer);