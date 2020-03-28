const renderElementList = (list, component) => {

  if (!list.length) {
    return null;
  }

  return list.map((item) => {
    return component(item);
  });
};

export default renderElementList;