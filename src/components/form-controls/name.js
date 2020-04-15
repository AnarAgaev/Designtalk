import React from "react";
import { Form } from "react-bootstrap";

const Name = ({ register, errors, required }) => {
  return (
    <Form.Group className={ errors.name ? 'has-error' : null }>
      <Form.Control
        type="text"
        placeholder="Ваше имя"
        name="name"
        ref={register({
          required: required ? 'Необходимо заполнить поле имя' : false
        })} />

      {
        errors.name &&
        <div className="invalid-feedback">{ errors.name.message }</div>
      }
    </Form.Group>
  );
};

export default Name;