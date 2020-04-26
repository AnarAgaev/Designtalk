import React from "react";
import "./nav.scss";

const Nav = ({
    elements,
    mobileNavSocial,
    sendMailToUs,
    mobileNavLogo,
    btnHideMenu,
    hideMenu,
    visible
  }) => {

  return (
    <nav className={ visible ? "nav visible" : "nav" } >
      <ul className="nav__list">
        { btnHideMenu ? btnHideMenu(hideMenu) : null }
        { elements }
        { mobileNavSocial ? mobileNavSocial() : null }
        { sendMailToUs ? sendMailToUs() : null }
        { mobileNavLogo ? mobileNavLogo() : null }
      </ul>
    </nav>
  );
};

export default Nav;