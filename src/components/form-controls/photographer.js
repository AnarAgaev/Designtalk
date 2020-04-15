import React from "react";
import { Form } from "react-bootstrap";

const Photographer = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.photographer
        ? 'has-error'
        : null } >

      <Form.Control
        type="text"
        placeholder="Фотограф съемки"
        name="photographer"
        ref={register({
          required: required
            ? 'Необходимо указать фотографа проекта'
            : false
        }) }
      />

      {
        errors.photographer &&
        <div className="invalid-feedback">
          { errors.photographer.message }
        </div>
      }
    </Form.Group>
  );
};

export default Photographer;