import React from "react";
import { connect } from 'react-redux';
import { fetchArticles } from "../../actions";
import { compose } from "../../utils";
import withBlogService from "../hoc";
import ButtonMore from "../button-more";

const ShowMoreArticles = ({ fetchArticles, visible, url }) => {

  const style = visible
    ? { display: 'block' }
    : { display: 'none' };

  const onFetchArticles = () => {
    fetchArticles(url)();
  };

  return <ButtonMore
    handleClick={ onFetchArticles }
    style={ style } />;
};

const mapStateToProps = ({ articleList: { next: url } }) => {
  return {
    url,
    visible: !!url
  };
};

const mapDispatchToProps = ( dispatch, { blogService } ) => {
  return {
    fetchArticles: (url) => fetchArticles(
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
)(ShowMoreArticles);