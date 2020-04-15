import React from "react";
import { Form } from "react-bootstrap";

const Stylist = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.stylist
        ? 'has-error'
        : null } >

      <Form.Control
        type="text"
        placeholder="Стилист съемки"
        name="stylist"
        ref={register({
          required: required
            ? 'Необходимо указать стилиста проекта'
            : false
        }) }
      />

      {
        errors.stylist &&
        <div className="invalid-feedback">
          { errors.stylist.message }
        </div>
      }
    </Form.Group>
  );
};

export default Stylist;