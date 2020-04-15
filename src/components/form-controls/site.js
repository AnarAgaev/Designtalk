import React from "react";
import { Form } from "react-bootstrap";

const Site = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.site
        ? 'has-error'
        : null } >

      <Form.Control
        type="text"
        placeholder="Вeб-caйт"
        name="site"
        ref={register({
          required: required
            ? 'Необходимо указать Веб-сайт'
            : false
        }) }
      />

      {
        errors.site &&
        <div className="invalid-feedback">
          { errors.site.message }
        </div>
      }
    </Form.Group>
  );
};

export default Site;