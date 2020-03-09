import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span>
        We're sorry.
        Service, unfortunately, temporarily does not work.
        We are already fixing this issue.
      </span>
    </div>
  );
};

export default ErrorIndicator;