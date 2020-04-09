import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./policy-modal.sass.scss";

const PolicyModal = ({ hidePolicyModal, clazz }) => {
  return (
    <div className={ clazz }>
      <Container>
        <Row>
          <Col lg={10}>
            <p className={"policy-modal__content"}>
              Для того чтобы сделать сайт designtalk.ru удобнее и безопаснее мы используем файлы cookies.
              Продолжая использование сайта, вы соглашаетесь с этим. Понять, зачем нам нужны файлы cookies
              и как прекратить сбор данных, можно <Link className={"link"} to="/terms-of-use">на этой странице</Link>.
              Также посещая страницы сайта, вы соглашаетесь с <Link className={"link"} to="/privacy-policy">Политикой конфиденциальности</Link>,&nbsp;
              <Link className={"link"} to="/policy-personal-data">Политикой обработки персональных данных и передачей файлов cookies третьим лицам</Link>.
            </p>
          </Col>
          <Col lg={2}>
            <button
              className={"button policy-modal__btn"}
              onClick={ () => hidePolicyModal() } >
              Я понял
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PolicyModal;