import React from "react";
import { Form } from "react-bootstrap";

const Email = ({ register, errors, required }) => {
  return (
    <Form.Group className={ errors.email ? 'has-error' : null }>
      <Form.Control
        type="text"
        placeholder="Адрес электронной почты"
        name="email"
        ref={register({
          required: required ? 'Необходимо указать Адрес электронной почты' : false ,
          pattern: {
            value: /.+@.+\..+/i,
            message: 'Некорректный адрес электронной почты'
          }
        })} />

      {
        errors.email &&
        <div className="invalid-feedback">{ errors.email.message }</div>
      }
    </Form.Group>
  );
};

export default Email;