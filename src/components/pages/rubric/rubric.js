import React from "react";
import LastRubricArticleContainer from "../../last-rubric-article";

import "./rubric.scss";

const Rubric = ({ rubric }) => {
  return (
    <>
      <LastRubricArticleContainer rubric={ rubric } />
    </>
  );
};

export default Rubric;