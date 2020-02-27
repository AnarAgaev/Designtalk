import React from "react";
import {Container} from "react-bootstrap";

import './main.scss';
import LastArticle from "../../last-article";
import ArticlesList from "../../articles-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import Popular from "../../popular";

import img1 from './img/smart-kvartira-v-brazilii-pufikhomes-1-1.jpg';
import img2 from './img/interesting-colors-in-new-york-apartment-pufikhomes-1-1.jpg';
import img3 from './img/elegantnaya-skandinavskaya-kvartira-v-priglushennyh-tonah-pufikhomes-1.jpg';
import img4 from './img/malenkaya-kvartira-v-temno-seryh-tonah-v-shvecii-40kvm-pufikhomes-2-1.jpg';

const Main = () => {

  const articlesListData = [
    { columns: 7, columnClass: '', img: img1, hashtag: '#Маленькие квартиры', caption: 'Светлая квартира с персиковыми стенами на окраине Стокгольма'},
    { columns: 5, columnClass: '', img: img2, hashtag: '#Маленькие квартиры', caption: 'Интересные цветовые сочетания в интерьере квартиры в Нью-Йорке'},
    { columns: 6, columnClass: 'pr-5', img: img3, hashtag: '#Маленькие квартиры', caption: 'Элегантная скандинавская квартира в приглушенных тонах'},
    { columns: 6, columnClass: 'pl-5', img: img4, hashtag: '#Маленькие квартиры', caption: 'Маленькая серая квартира с видом на залив в Стокгольме'}
  ];

  const MainPageTitle = () => {
    return (
      <Container>
        <h1 className="index-title">
          Spacebuilder
          <span> &#8212; цифровой блог о дизайне пространства</span>
        </h1>
      </Container>
    );
  };

  return (
    <>
      <MainPageTitle />
      <LastArticle />
      <ArticlesList articles={ articlesListData }/>
      <ButtonMore />
      <Subscribe />
      <Popular />
    </>
  );
};

export default Main;