import React from "react";
import "./send-mail-to-us.scss";

const SendMailToUs = () => {
 return (
   <li className="send-mail-to-us big-screen-hide">
     <div className="send-mail-to-us__title">
       Напишите нам письмо
     </div>
     <a className="send-mail-to-us__link"
        href="mailto:hi@designtalk.ru">
       hi@designtalk.ru
     </a>
   </li>
 );
};

export default SendMailToUs;