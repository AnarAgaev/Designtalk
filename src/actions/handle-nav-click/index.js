import activeNavItem from "./active-nav-item";

const handleNavClick = (
    dispatch,
    activeItem
  ) => {

  dispatch(
    activeNavItem(activeItem)
  );
};

export default handleNavClick;