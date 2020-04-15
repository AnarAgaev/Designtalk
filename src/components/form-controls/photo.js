import React from "react";
import { Form } from "react-bootstrap";

const Photo = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.photo
        ? 'has-error'
        : null } >

      <Form.Control
        type="text"
        placeholder="Ссылка на фотографию автора проекта"
        name="photo"
        ref={register({
          required: required
            ? 'Необходимо указать ссылку на фото автора'
            : false
        }) }
      />

      {
        errors.photo &&
        <div className="invalid-feedback">
          { errors.photo.message }
        </div>
      }
    </Form.Group>
  );
};

export default Photo;