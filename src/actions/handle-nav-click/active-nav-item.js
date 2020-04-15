const activeNavItem = (activeItem) => {
  return {
    type: 'ACTIVATE_MENU_ITEM',
    payload: activeItem
  };
};

export default activeNavItem;