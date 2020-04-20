import React from "react";
import "./rubric-title.scss";

const RubricTitle = ({ title }) => {
  return (
    <h1 className={"rubric__title"}>
      { title }
    </h1>
  );
};

export default RubricTitle;