import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './subscribe.scss';

export default class Subscribe extends Component {
  textInput = React.createRef();

  state = {
    email: '',
    error: false
  };

  handleInputChange = (event) => {
    this.setState({
      email: event.target.value,
      error: false
    });
    this.formValidate();
  };

  formValidate = () => {
    const regular = /.+@.+\..+/i;
    regular.test(this.state.email) ?
      this.setState({ error: false }) :
      this.setState({ error: true });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { error, email } = this.state;

    if (!error && email !== '') {
      this.props.handleModalShow('Спасибо за подписку на наши новости! Будет много инетересного.');
      this.setState({
        email: '',
        error: false
      });
    } else this.textInput.current.focus();
  };

  handleInputBlur = () => {
    this.state.email === '' ?
      this.setState({ error: false }) :
      null;
  };

  render() {
    const { email, error } = this.state;
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
                     onBlur={ this.handleInputBlur }
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
      </Container>
    );
  }
};