import React from "react";

import './main.scss';

import LastArticle from "../../last-article";
import ArticlesList from "../../articles-list";
import ButtonMore from "../../button-more";
import Subscribe from "../../subscribe";
import Popular from "../../popular";
import MainPageTitle from "../../main-page-title";

import img1 from './img/smart-kvartira-v-brazilii-pufikhomes-1-1.jpg';
import img2 from './img/interesting-colors-in-new-york-apartment-pufikhomes-1-1.jpg';
import img3 from './img/elegantnaya-skandinavskaya-kvartira-v-priglushennyh-tonah-pufikhomes-1.jpg';
import img4 from './img/malenkaya-kvartira-v-temno-seryh-tonah-v-shvecii-40kvm-pufikhomes-2-1.jpg';

const articlesListData = [
  { id: 1, columns: 7, columnClass: '', img: img1, rubric: '#Маленькие квартиры', caption: 'Светлая квартира с персиковыми стенами на окраине Стокгольма'},
  { id: 2, columns: 5, columnClass: '', img: img2, rubric: '#Маленькие квартиры', caption: 'Интересные цветовые сочетания в интерьере квартиры в Нью-Йорке'},
  { id: 3, columns: 6, columnClass: 'pr-5', img: img3, rubric: '#Маленькие квартиры', caption: 'Элегантная скандинавская квартира в приглушенных тонах'},
  { id: 4, columns: 6, columnClass: 'pl-5', img: img4, rubric: '#Маленькие квартиры', caption: 'Маленькая серая квартира с видом на залив в Стокгольме'}
];

const Main = () => {
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