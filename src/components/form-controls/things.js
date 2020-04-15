import React from "react";
import { Form } from "react-bootstrap";

const Things = ({ register, errors, required }) => {
  return (
    <Form.Group className={ errors.things ? 'has-error' : null }>
      <Form.Control
        as="textarea"
        rows={4}
        placeholder="Предметы использованные в интерьере"
        name="things"
        ref={ register({
          required: required ? 'Необходимо указать использованные предметы' : false
        })} />
      <Form.Text>
        Производитель, Коллекция, Наименование
      </Form.Text>
      {
        errors.things &&
        <div className="invalid-feedback">{ errors.things.message }</div>
      }
    </Form.Group>
  );
};

export default Things;