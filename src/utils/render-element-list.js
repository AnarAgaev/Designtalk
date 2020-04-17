import React from "react";

const renderElementList = (list, Component) => {

  if (!list.length) {
    return null;
  }

  return list.map((props) => {
    return <Component key={ props.id } { ...props } />;
  });
};

export default renderElementList;