import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { jumpToTop } from "../../utils";
import "./form.scss";

class From extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <Form className="form" onSubmit={ this.props.onSubmit }>

        { this.props.controls }

        <Button
          className="button"
          type="submit">
          Отправить
        </Button>

        <p className="attention-policy">
          Нажимая на кнопку "Отправить", Вы даёте согласие на
          обработку персональных данных
          согласно <Link className={"link"} to="/privacy-policy">Политике
          конфиденциальности</Link> и <Link className={"link"} to="/policy-personal-data">Политике
          обработки персональных данных</Link>.
        </p>
      </Form>
    );
  }
}

export default From;