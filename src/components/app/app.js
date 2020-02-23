import React from "react";

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import { Container, Row, Col } from 'react-bootstrap';
import '../../scss/main.scss';

const App = () => {
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <h2 className="my-5">Hello Spacebuilder!</h2>
        </Col>
      </Row>
    </Container>
  )
};

export default App;