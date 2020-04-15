import React from "react";
import { Form } from "react-bootstrap";

const ObjectPhotos = ({
    register,
    errors,
    required
  }) => {

  return (
    <Form.Group
      className={ errors.objectphotos
        ? 'has-error'
        : null } >

      <Form.Control
        type="text"
        placeholder="Ссылка на фотографии интерьера/объекта"
        name="objectphotos"
        ref={register({
          required: required
            ? 'Необходимо указать ссылку на фотографии интерьера/объекта '
            : false
        }) }
      />

      <Form.Text>
        Загрузите фотографии на любой файлообменник и приложите ссылку
      </Form.Text>

      {
        errors.objectphotos &&
        <div className="invalid-feedback">
          { errors.objectphotos.message }
        </div>
      }
    </Form.Group>
  );
};

export default ObjectPhotos;