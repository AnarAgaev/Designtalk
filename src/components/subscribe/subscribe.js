import React from "react";

import './subscribe.scss';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Subscribe = () => {
  return (
    <Container>
      <Row className="subscribe">
        <Col lg={7}>
          <div className="subscribe__title">самое интересное в твоей почте.</div>
          <div className="subscribe__subtitle">подписывайся на нашу рассылку</div>
        </Col>
        <Col lg={5}>
          <form>
            <input id="sub-mail" type="text" placeholder="Адрес почты" />
            <button className="button" type="submit" role="button">подписаться</button>
            <p className="subscribe__policy">
              Нажимая на кнопку «Подписаться», Вы даёте согласие на
              обработку персональных данных согласно&nbsp;
              <Link to="/policy-personal-data">Политике обработки персональных данных</Link>
              &nbsp;и <Link to="/privacy-policy">Политике конфиденциальности</Link>.
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;