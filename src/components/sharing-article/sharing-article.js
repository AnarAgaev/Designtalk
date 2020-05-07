import React from "react";
import SocialListItem from "../social-list-item";
import socialItems from "./social-list-data";
import { renderElementList } from "../../utils";
import "./sharing-article.scss";

const SharingArticle = () => {
  const iconList = renderElementList(
    socialItems,
    SocialListItem
  );

  return (
    <>
      <span className="sharing-article__caption">подписывайтесь на нас в социальных сетях:</span>
      <ul className="sharing-article__social-list">
        { iconList }
      </ul>
    </>
  );

};

export default SharingArticle;