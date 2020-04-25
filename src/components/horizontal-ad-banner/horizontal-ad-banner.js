import React from "react";
import "./horizontal-ad-banner.scss";

const HorizontalAdBanner = () => {
  return (
    <div className="horizontal-ad-banner">
      <a target="_blank" rel="noopener noreferrer" className="horizontal-ad-banner__link"
         href="https://www.lg.com/ru/lg-signature/performance/perfection-realized-refrigerator">
        <img
          className="horizontal-ad-banner__pic" alt=""
          src="https://designtalk.ru/images/adv/718539379639185696.jpg" />
      </a>
    </div>
  );
};

export default HorizontalAdBanner;