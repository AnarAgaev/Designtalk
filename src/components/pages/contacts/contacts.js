import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FromContainer from "../../form"
import './contacts.scss';

const Contacts = () => {
  return (
    <Container>
      <Row>
        <Col lg={9}>
          <h1>Контакты</h1>
          <h3>
            Мы всегда внимательны к сообщениям со страницы контакты.
            Вы можете использовать данную форму для отправки вопросов
            по любым темам.
          </h3>
        </Col>
      </Row>

      <Row>
        <Col lg={7}>
          <FromContainer
            name={{required: false}}
            phone={{required: false}}
            email={{required: true}}
            message={{required: true}}

            url={'/scripts/handle-form-contacts.php'}

            successMessage={
              'Зпрос отправлен. Менеджер свяжется ' +
              'с Вами в ближайшее время.'
            }
            failureMessage={
              'К сожалению, запрос не отправлен. ' +
              'Попробуйте немного позже.'
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;