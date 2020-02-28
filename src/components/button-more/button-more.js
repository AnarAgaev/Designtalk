import React, {Component} from "react";
import { Container } from "react-bootstrap";

import './button-more.scss';

export default class ButtonMore extends Component {
  render() {
    return (
      <Container>
        <div className="d-flex mb-5 justify-content-center">
          <button className="button px-5 py-4" onClick={ () => { console.log('Hello App!') } }>Показать больше интересного</button>
        </div>
      </Container>
    );
  }
};