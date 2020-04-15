import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./form.scss";

const From = ({
    onSubmit,
    controls,
    btnText
  }) => {

  return (
    <Form className="form"
          onSubmit={ onSubmit } >

      { controls }

      <Button
        className="button"
        type="submit">
        { btnText }
      </Button>

      <p className="attention-policy">
        Нажимая на кнопку "{ btnText }", Вы даёте согласие на обработку персональных данных
        согласно <Link className={"link"} to="/privacy-policy">Политике
        конфиденциальности</Link> и <Link className={"link"} to="/policy-personal-data">Политике
        обработки персональных данных</Link>.
      </p>
    </Form>
  );
};

export default From;