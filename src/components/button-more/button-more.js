import React from "react";
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";
import './button-more.scss';

const ButtonMore = ({ getNexPage, visible }) => {

  const styleButton = visible ?
    { display: 'block' } :
    { display: 'none' };

  return (
    <Container>
      <div className="d-flex mb-5 justify-content-center">
        <button
          style={ styleButton }
          className="button px-5 py-4"
          onClick={ getNexPage }>
          Показать больше интересного
        </button>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ next }) => {
  return {
    visible: !!next
  };
};

export default connect(
  mapStateToProps
)(ButtonMore);