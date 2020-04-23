import React from "react";

const renderElementList = (list, Component, payload) => {

  if (!list.length) {
    return null;
  }

  return list.map((props) => {
    return <Component
      key={ props.id }
      payload={ payload }
      { ...props } />;
  });
};

export default renderElementList;