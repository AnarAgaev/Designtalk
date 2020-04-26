import React from "react";
import SocialListItem from "../social-list-item";
import socialItems from "./social-list-data";
import { renderElementList } from "../../utils";
import "./socials-list.scss";

const SocialList = ({ visible }) => {

  const iconList = renderElementList(
    socialItems,
    SocialListItem
  );

  return (
    <ul className={ `social__list ${visible}` } >
      { iconList }
    </ul>
  );
};

export default SocialList;