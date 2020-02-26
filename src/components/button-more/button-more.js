import React from "react";

import './button-more.scss';
import {Container} from "react-bootstrap";

const ButtonMore = () => {
  return (
    <Container>
      <div className="d-flex mb-5 justify-content-center">
        <button className="button px-5 py-4">Показать больше интересного</button>
      </div>
    </Container>
  );
};

export default ButtonMore;