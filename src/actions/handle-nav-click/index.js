import activeNavItem from "./active-nav-item";
import toggleVisibleMenu from "./toggle-visible-menu";

const handleNavClick = (
    dispatch,
    activeItem
  ) => {

  dispatch(
    activeNavItem(activeItem)
  );
};

export {
  handleNavClick,
  toggleVisibleMenu
};