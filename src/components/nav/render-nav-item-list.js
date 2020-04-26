import NavItem from "../nav-item";

const renderNavItemList = (
  activeItem,
  onNavClick,
  navItemList,
  hideMenu
) => {

  return navItemList.map((item) => {
    return NavItem(
      activeItem,
      onNavClick,
      item[0],
      item[1],
      hideMenu
    );
  });
};

export default renderNavItemList;