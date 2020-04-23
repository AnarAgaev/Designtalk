import React from "react";
import "./absolute-wrapper.scss";

const AbsoluteWrapper = ({ children }) => {
  return (
    <div className="absolute-wrapper">
      { children }
    </div>
  );
};

export default AbsoluteWrapper;