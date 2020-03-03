import React, { Component } from "react";

import './subscribe.scss';
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";
import ModalMessage from "../modal-message";
import {text} from "@fortawesome/fontawesome-svg-core";

export default class Subscribe extends Component {
  textInput = React.createRef();

  state = {
    email: '',
    error: false,
    modalMsg: '',
    modalVisible: false
  };

  handleInputChange = (event) => {
    this.setState({
      email: event.target.value,
      error: false
    });
    this.handleFormValidate();
  };

  handleFormValidate = () => {
    const regular = /.+@.+\..+/i;
    regular.test(this.state.email) ?
      this.setState({ error: false }) :
      this.setState({ error: true });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { error, email } = this.state;

    if (!error && email !== '') {
      this.onModalShow('Спасибо за подписку на наши новости! Будет много инетересного и вдохновляющего.');
    } else this.textInput.current.focus();
  };

  onModalShow = (msg) => {
    this.setState({
      modalVisible: true,
      modalMsg: msg
    });
  };

  onModalHide = () => {
    this.setState({
      email: '',
      modalMsg: '',
      modalVisible: false
    })
  };

  render() {
    const { email, error, modalVisible, modalMsg } = this.state;

    const btnClass = error ? 'button blocked' : 'button';

    return (
      <Container>
        <Row className="subscribe">
          <Col lg={7}>
            <div className="subscribe__title">самое интересное в твоей почте.</div>
            <div className="subscribe__subtitle">подписывайся на нашу рассылку</div>
          </Col>
          <Col lg={5}>
            <form onSubmit={ this.handleFormSubmit }>
              <input type="text"
                     placeholder="Адрес почты"
                     value={ email }
                     onChange={ this.handleInputChange }
                     ref={ this.textInput } />
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
        <ModalMessage
          modalVisible={ modalVisible }
          modalMsg={ modalMsg }
          onModalHide={ this.onModalHide } />
      </Container>
    );
  }
};