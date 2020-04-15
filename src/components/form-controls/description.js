import React from "react";
import { Form } from "react-bootstrap";

const Description = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.description
        ? 'has-error'
        : null } >

      <Form.Control
        as="textarea"
        rows={8}
        placeholder="Описание интерьера/проекта"
        name="description"
        ref={ register({
          required: required
            ? 'Необходимо описать проект'
            : false
        }) }
      />

      <Form.Text>
        Приемы планировки и декора, другие важные
        подробности работы над интерьером/объектом
      </Form.Text>

      {
        errors.description &&
        <div className="invalid-feedback">
          { errors.description.message }
        </div>
      }
    </Form.Group>
  );
};

export default Description;