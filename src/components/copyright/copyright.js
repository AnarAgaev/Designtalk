import React, {Component} from "react";

import './copyright.scss';

export default class Copyright extends Component {
  render() {
    return (
      <small className="copy">
        <p>
          © Общество с ограниченной ответственностью
          "Цифровое Медиа "Спэйс Билдер" 2020 - 2020.
        </p>
        <p>
          Все права защищены. Использование материалов сайта spacebuilder.ru
          разрешается только с письменного согласия редакции и при наличии
          гиперссылки на spacebuilder.ru.
        </p>
        <p>
          По вопросам соблюдения интеллектуальных прав обращайтесь по адресу&nbsp;
          <a href="mailto:intellectualrights@spacebuilder.ru">
            intellectualrights@spacebuilder.ru
          </a>
        </p>
      </small>
    )
  }
}