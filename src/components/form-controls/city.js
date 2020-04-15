import React from "react";
import { Form } from "react-bootstrap";

const City = ({ register, errors, required }) => {
  return (
    <Form.Group className={ errors.city ? 'has-error' : null }>
      <Form.Control
        type="text"
        placeholder="Город (в котором находится объект/интерьер)"
        name="city"
        ref={register({
          required: required ? 'Необходимо указать город' : false
        })} />

      {
        errors.city &&
        <div className="invalid-feedback">{ errors.city.message }</div>
      }
    </Form.Group>
  );
};

export default City;