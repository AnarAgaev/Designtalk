import React from "react";
import "./button-more.scss";
import {Container} from "react-bootstrap";

const ButtonMore = ({ style, handleClick }) => {
  return (
    <Container>
      <div className="d-flex mb-5 justify-content-center">
        <button
          style={ style }
          className="button px-5 py-4"
          onClick={ handleClick }>
          показать больше интересного
        </button>
      </div>
    </Container>
  );
};

export default ButtonMore;