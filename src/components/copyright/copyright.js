import React from "react";

import './copyright.scss';

const date = new Date();

const Copyright = () => {
  return (
    <small className="copy">
      <p>
        © "Цифровое Медиа "Дизайнталк" 2020 - {`${date.getFullYear()}`}.
      </p>
      <p>
        Все права защищены. Использование материалов сайта designtalk.ru
        разрешается только с письменного согласия редакции и при наличии
        гиперссылки на designtalk.ru
      </p>
      <p>
        По вопросам соблюдения интеллектуальных прав обращайтесь по адресу&nbsp;
        <a className={"link"} href="mailto:intellectualrights@designtalk.ru">
          intellectualrights@designtalk.ru
        </a>
      </p>
    </small>
  );
};

export default Copyright;