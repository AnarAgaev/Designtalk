import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AbsoluteWrapper from "../../absolute-wrapper";
import { Helmet } from "react-helmet";
import "./confirm-subscription.scss";

const ConfirmSubscriptionFailure = () => {
  return (
    <AbsoluteWrapper>
      <Helmet>
        <title>Подписка не подтверждена. | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
        <meta name="description" content="Во время процесса подтверждения подписки произошла ошибка" />
      </Helmet>
      <Container className={"confirm-subscription"}>
        <Row>
          <Col lg={12}>
            <h1>Подписка<br/>не подтверждена</h1>
            <p>
              К сожалению, не удалось завершить процесс подтверждения подписки.
              <br/>
              Немного позже попробуйте ещё раз перейти по ссылке из письма.
              <br/>
              Приносим свои извиннения.
            </p>
            <Link to={"/"} className="button confirm-subscription__btn">
              Перейти на главную
            </Link>
          </Col>
        </Row>
      </Container>
    </AbsoluteWrapper>
  );
};

export default ConfirmSubscriptionFailure;