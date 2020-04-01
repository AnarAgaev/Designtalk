import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './subscribe.scss';

export default class Subscribe extends Component {
  input = React.createRef();

  render() {
    const {
      email, error,
      handleInputChange,
      handleInputBlur,
      handleFormSubmit } = this.props;

    const btnClass = error ? 'button blocked' : 'button';

    return (
      <Container>
        <Row className="subscribe">
          <Col lg={7}>
            <div className="subscribe__title">самое интересное в твоей почте.</div>
            <div className="subscribe__subtitle">подписывайся на нашу рассылку</div>
          </Col>
          <Col lg={5}>
            <form onSubmit={ (event) => handleFormSubmit(event, email, error, this.input) }>
              <input type="text"
                     placeholder="Адрес почты"
                     value={ email }
                     onChange={ handleInputChange }
                     onBlur={ () => handleInputBlur(email) }
                     ref={ this.input } />
              <button className={ btnClass }
                      type="submit">подписаться</button>
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
  }
};