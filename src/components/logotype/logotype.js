import React, {Component} from "react";

import './logotype.scss';

export default class Logotype extends Component {
  render() {
    return (
      <a className="logo">
        <span className="logo__caption">Spacebuilder</span>
        <span className="logo__letter">Sb</span>
      </a>
    )
  }
}
