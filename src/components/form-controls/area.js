import React from "react";
import { Form } from "react-bootstrap";

const Area = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.area
        ? 'has-error'
        : null } >

      <Form.Control
        type="text"
        placeholder="Площадь объекта"
        name="area"
        ref={register({
          required: required
            ? 'Необходимо указать площадь объекта'
            : false
        })} />

      {
        errors.area &&
        <div className="invalid-feedback">
          { errors.area.message }
        </div>
      }
    </Form.Group>
  );
};

export default Area;