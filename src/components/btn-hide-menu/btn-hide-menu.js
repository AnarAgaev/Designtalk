import React from "react";
import "./btn-hide-menu.scss";

const BtnHideMenu = (hideMenu) => {
  return (
    <li className="close-nav big-screen-hide" onClick={ hideMenu }/>
  );
};

export default BtnHideMenu;