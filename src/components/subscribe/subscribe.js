import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FromContainer from "../form";
import './subscribe.scss';

const Subscribe = () => {
  return (
    <Container>
      <Row className="subscribe">
        <Col lg={7}>
          <div className="subscribe__title">самое интересное в твоей почте.</div>
          <div className="subscribe__subtitle">подписывайся на нашу рассылку</div>
        </Col>
        <Col lg={5}>
          <FromContainer
            email={{required: true}}

            url={'/scripts/handle-form-subscribe.php'}

            btnText={'Подписаться'}

            successMessage={
              'Мы выслали Вами письмо с подтверждением. ' +
              'Пожалуйста, проверьте свою почту и подтвердите подписку.'
            }

            failureMessage={
              'К сожалению, не получилось оформить подписку ' +
              'на новости. Попробуйте немного позже.'
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;