import React from "react";
import './spinner.scss';

const Spinner = ({ spinnerVisible }) => {

  const spinnerClass = spinnerVisible ?
    'loading-spinner visible' :
    'loading-spinner';

  return (
    <div className={ spinnerClass } >
      <div className="spinner">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;