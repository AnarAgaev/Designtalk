import React from "react";
import { Form } from "react-bootstrap";

const SocialPages = ({ register, errors, required }) => {
  return (
    <Form.Group className={ errors.socials ? 'has-error' : null }>
      <Form.Control
        as="textarea"
        rows={4}
        placeholder="Страницы бюро или автора в социальных сетях"
        name="socials"
        ref={ register({
          required: required ? 'Необходимо указать аккаунты соц. сетей' : false
        })} />
      { errors.socials && <div className="invalid-feedback">{ errors.socials.message }</div> }
    </Form.Group>
  );
};

export default SocialPages;