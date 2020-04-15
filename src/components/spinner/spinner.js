import React from "react";
import './spinner.scss';

const Spinner = ({ clazz }) => {
  return (
    <div className={ clazz } >
      <div className="loading">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;