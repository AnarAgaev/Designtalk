import React, {Component} from "react";
import './main.scss';

import LastArticle from "../../last-article";
import ArticlesList from "../../articles-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import PopularList from "../../popular-list";
import MainPageTitle from "../../main-page-title";

import img1 from './img/smart-kvartira-v-brazilii-pufikhomes-1-1.jpg';
import img2 from './img/interesting-colors-in-new-york-apartment-pufikhomes-1-1.jpg';
import img3 from './img/elegantnaya-skandinavskaya-kvartira-v-priglushennyh-tonah-pufikhomes-1.jpg';
import img4 from './img/malenkaya-kvartira-v-temno-seryh-tonah-v-shvecii-40kvm-pufikhomes-2-1.jpg';
import img5 from './img/elegantnaya-krasivaya-sovremennaya-kvartira-v-stokgolme-pufikhomes-4a.jpg';
import img6 from './img/kids-room-for-two-three-pufikhomes-2a.jpg';
import img7 from './img/korichnevye-steny-v-skandinavskoi-kvartire-pufikhomes-1-1.jpg';
import img8 from './img/minimalistichnaya-kvartira-v-moskve-pufikhomes-2.jpg';

export default class Main extends Component {
  render() {
    const { handleCursorOverImg, popularListData,
            articlesListData, popularListPosition,
            toggleSlide, handleModalShow, lastArticle } = this.props;

    return (
      <>
        <MainPageTitle />
        <LastArticle
          handleCursorOverImg={ handleCursorOverImg }
          lastArticle={ lastArticle } />
        <ArticlesList
          articlesListData={ articlesListData }
          handleCursorOverImg={ handleCursorOverImg }
        />
        <ButtonMore />
        <Subscribe handleModalShow={ handleModalShow } />
        <PopularList
          popularListData={ popularListData }
          handleCursorOverImg={ handleCursorOverImg }
          popularListPosition={ popularListPosition }
          toggleSlide={ toggleSlide } />
      </>
    );
  }
}