import React, { Component } from "react";
import { Container } from "react-bootstrap";
import scrollToTop from "../../../utils/scroll-to-top";
import './policy-personal-data.scss';

class PolicyPersonalData extends Component {

  componentDidMount() {
    scrollToTop();
  }

  render() {
    return (
      <Container>Политика обработки персональных данных</Container>
    );
  }
}

export default PolicyPersonalData;