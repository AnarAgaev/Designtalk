import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AbsoluteWrapper from "../../absolute-wrapper";
import { Helmet } from "react-helmet";
import "./confirm-subscription.scss";

const ConfirmSubscriptionSuccess = () => {
  return (
    <AbsoluteWrapper>
      <Helmet>
        <title>Подписка подтверждена. | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
        <meta name="description" content="Процесс подписки на новости от Designtalk.ru завершился успешно." />
      </Helmet>
      <Container className={"confirm-subscription"}>
        <Row>
          <Col lg={12}>
            <h1>Подписка<br/>подтверждена</h1>
            <p>
              Спасибо за подписку на новости от Designtalk.ru.
              <br/>
              Обещаем, будет много интересного из мира дизайна, архитектуры и искусства.
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

export default ConfirmSubscriptionSuccess;