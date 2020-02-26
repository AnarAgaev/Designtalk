import React from "react";
import { Link } from "react-router-dom";
import './logotype.scss';

const Logotype = () => {
  return (
    <Link className="logo" to="/">
      <span className="logo__caption">Spacebuilder</span>
      <span className="logo__letter">Sb</span>
    </Link>
  )
};

export default Logotype;