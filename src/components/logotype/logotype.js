import React from "react";
import { Link } from "react-router-dom";
import './logotype.scss';

const Logotype = () => {
  return (
    <Link className="logo" to="/">
      <span className="logo__letters">dt</span>
      <span className="logo__point">.</span>
    </Link>
  )
};

export default Logotype;