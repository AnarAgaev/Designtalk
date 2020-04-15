import React from "react";
import { Form } from "react-bootstrap";

const DateFinish = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.datefinish
        ? 'has-error'
        : null } >

      <Form.Control
        type="text"
        placeholder="Дата сдачи интерьера/объекта"
        name="datefinish"
        ref={register({
          required: required
            ? 'Необходимо указать дату сдачи'
            : false
        })} />

      {
        errors.datefinish &&
        <div className="invalid-feedback">
          { errors.datefinish.message }
        </div>
      }
    </Form.Group>
  );
};

export default DateFinish;