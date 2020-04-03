import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./button-feedback.scss";

const ButtonFeedback = () => {
  return (
    <button className={ 'btn-envelope' }>
      <FontAwesomeIcon icon={ faEnvelope } />
    </button>
  );
};

export default ButtonFeedback;