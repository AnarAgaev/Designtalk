import React from "react";
import { connect } from 'react-redux';
import './spinner.scss';

const Spinner = ({ loading }) => {

  const clazz = loading ?
    'spinner visible' :
    'spinner';

  return (
    <div className={ clazz } >
      <div className="loading">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    articleList: { loading: articlesLoading },
    popularList: { loading: popularLoading }
  } = state;

  return {
    loading: articlesLoading || popularLoading
  };
};

export default connect(
  mapStateToProps
)(Spinner);