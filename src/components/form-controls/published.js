import React from "react";
import { Form } from "react-bootstrap";

const Published = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.published
        ? 'has-error'
        : null } >

      <Form.Control
        as="textarea"
        rows={4}
        placeholder="Был ли этот проект опубликован?"
        name="published"
        ref={ register({
          required: required
            ? 'Необходимо указать публикации проекта'
            : false
        }) }
      />

      <Form.Text>
        Укажите был ли этот проект опубликован в
        печатных изданиях? Был ли опубликован на
        сайтах? Каких?
      </Form.Text>

      {
        errors.published &&
        <div className="invalid-feedback">
          { errors.published.message }
        </div>
      }
    </Form.Group>
  );
};

export default Published;