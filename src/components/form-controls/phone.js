import React from "react";
import { Form } from "react-bootstrap";

const Phone = ({ register, errors, required = false }) => {
  return (
    <Form.Group className={ errors.phone ? 'has-error' : null }>
      <Form.Control
        type="text"
        placeholder="Телефон для контакта"
        name="phone"
        ref={ register({
          required: required ? 'Необходимо указать Телефон' : false,
          minLength: {
            value: 6,
            message: 'Телефонный номер слишком короткий'
          },
          maxLength: {
            value: 20,
            message: 'Телефонный номер слишком длинный'
          },
          pattern: {
            value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
            message: 'Некорректный формат телефонного номера'
          }
        })} />
      { errors.phone && <div className="invalid-feedback">{ errors.phone.message }</div> }
    </Form.Group>
  );
};

export default Phone;