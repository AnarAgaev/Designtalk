import React from "react";
import { Form } from "react-bootstrap";

const Author = ({ register, errors, required }) => {
  return (
    <Form.Group className={ errors.author ? 'has-error' : null }>
      <Form.Control
        type="text"
        placeholder="Название бюро / Ф.И.О. авторов проекта"
        name="author"
        ref={register({
          required: required ? 'Необходимо указать автора проекта' : false
        })} />

      {
        errors.author &&
        <div className="invalid-feedback">{ errors.author.message }</div>
      }
    </Form.Group>
  );
};

export default Author;