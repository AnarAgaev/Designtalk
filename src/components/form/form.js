import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Name, Email, Phone, Message } from "../form-controls";
import "./form.scss";

const From = ({ name, email, phone, message }) => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log('errors: ', errors);

  return (
    <Form className="form" onSubmit={ handleSubmit(onSubmit) }>

      { name &&
        <Name
          errors={ errors }
          register={ register }
          required={ name.required } /> }

      { email &&
        <Email
          errors={ errors }
          register={ register }
          required={ email.required } /> }

      { phone &&
        <Phone
          errors={ errors }
          register={ register }
          required={ phone.required } /> }

      { message &&
        <Message
          errors={ errors }
          register={ register }
          required={ message.required } /> }

      <Button
        className="button"
        type="submit">
        Отправить
      </Button>

      <p className="attention-policy">
        Нажимая на кнопку "Отправить", Вы даёте согласие на
        обработку персональных данных
        согласно <Link className={"link"} to="/privacy-policy">Политике
        конфиденциальности</Link> и <Link className={"link"} to="/policy-personal-data">Политике
        обработки персональных данных</Link>.
      </p>
    </Form>
  );
};

export default From;