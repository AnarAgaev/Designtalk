import React from "react";
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;