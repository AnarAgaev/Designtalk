import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./button-feedback.scss";

const ButtonFeedback = () => {
  return (
    <a className="btn-envelope big-screen-visible" href="mailto: hi@designtalk.ru" >
      <FontAwesomeIcon icon={ faEnvelope } />
    </a>
  );
};

export default ButtonFeedback;