import React, { Component } from "react";
import { Container } from "react-bootstrap";

import './button-more.scss';

const ButtonMore = ({ getNexPage, nextPage }) => {

  const styleButton = nextPage ?
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

export default ButtonMore;