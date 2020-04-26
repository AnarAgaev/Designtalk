import React from "react";
import SocialTitle from "../social-title";
import SocialList from "../socials-list";
import "./mobile-nav-social.scss";

const  MobileNavSocial = () => {
  return (
    <li className="mobile-nav-social big-screen-hide">
      <SocialTitle/>
      <SocialList/>
    </li>
  );
};

export default MobileNavSocial;