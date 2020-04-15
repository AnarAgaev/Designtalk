const navigation = (state, action) => {
  if (state === undefined) {
    return {
      activeItem: null
    };
  }

  return ( action.type === 'ACTIVATE_MENU_ITEM' )
    ? {
        activeItem: action.payload
      }
    : state.navigation;
};

export default navigation;