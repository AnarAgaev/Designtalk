import React from "react";
import { Form } from "react-bootstrap";

const Message = ({ register, errors, required }) => {
  return (
    <Form.Group
      className={
        errors.msg
          ? 'has-error'
          : null }
    >
      <Form.Control
        as="textarea"
        rows={7}
        placeholder="Ваш вопрос или предложение"
        name="msg"
        ref={ register({
          required: required
            ? 'Необходимо написать сообщение'
            : false
        })} />
      { errors.msg && <div className="invalid-feedback">{ errors.msg.message }</div> }
    </Form.Group>
  );
};

export default Message;