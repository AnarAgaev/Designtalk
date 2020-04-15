import React from "react";
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";
import { fetchArticles } from "../../actions";
import { compose } from "../../utils";
import withBlogService from "../hoc";
import './button-more.scss';

const ButtonMore = ({ fetchArticles, visible, url }) => {

  const style = visible
    ? { display: 'block' }
    : { display: 'none' };

  const onFetchArticles = () => {
    fetchArticles(url)();
  };

  return (
    <Container>
      <div className="d-flex mb-5 justify-content-center">
        <button
          style={ style }
          className="button px-5 py-4"
          onClick={ onFetchArticles }>
          Показать больше интересного
        </button>
      </div>
    </Container>
  );
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
)(ButtonMore);