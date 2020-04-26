const updateNavigation = (state, action) => {

  if (state === undefined) {
    return {
      activeItem: null,
      visible: false
    };
  }

  switch (action.type) {

    case 'ACTIVATE_MENU_ITEM':
      return {
        ...state.navigation,
        activeItem: action.payload
      };

    case 'TOGGLE_VISIBLE_MENU':
      return {
        ...state.navigation,
        visible: !state.navigation.visible
      };

    default:
      return state.navigation;
  }
};

export default updateNavigation;