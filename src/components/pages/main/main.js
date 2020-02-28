import React from "react";
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

const articlesListData = [
  { id: 1, img: img1, rubric: '#Маленькие квартиры', caption: 'Светлая квартира с персиковыми стенами на окраине Стокгольма'},
  { id: 2, img: img2, rubric: '#Маленькие квартиры', caption: 'Интересные цветовые сочетания в интерьере квартиры в Нью-Йорке'},
  { id: 3, img: img3, rubric: '#Маленькие квартиры', caption: 'Элегантная скандинавская квартира в приглушенных тонах'},
  { id: 4, img: img4, rubric: '#Маленькие квартиры', caption: 'Маленькая серая квартира с видом на залив в Стокгольме'},
];

const popularListData = [
  { id: 1, img: img1, caption: 'Smart квартира в Бразилии', rubric: '#Маленькие квартиры', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью и оригинальными предметами декора' },
  { id: 2, img: img5, caption: 'Изысканный дизайн современных апартаментов', rubric: '#Современный Арт-Деко', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью' },
  { id: 3, img: img7, caption: 'Современная квартира с музыкальной комнатой в Стокгольме', rubric: '#Скандика', description: 'Несмотря на стереотипы, сочетание бежевого и серого может быть удачным' },
  { id: 4, img: img6, caption: 'Детская для двоих или троих: несколько прекрасных идей', rubric: '#Подборки', description: 'Если в семье больше одного ребенка, а детская всего одна, то это может стать настоящей головной болью' },
  { id: 5, img: img8, caption: '10 причин полюбить белый интерьер', rubric: '#Концепции', description: 'Мы так часто и так много пишем о разных белых интерьерах, что наконец-то решили сделать подборочку' },
  { id: 6, img: img1, caption: 'Smart квартира в Бразилии', rubric: '#Маленькие квартиры', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью и оригинальными предметами декора' },
  { id: 7, img: img5, caption: 'Изысканный дизайн современных апартаментов', rubric: '#Современный Арт-Деко', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью' },
  { id: 8, img: img7, caption: 'Современная квартира с музыкальной комнатой в Стокгольме', rubric: '#Скандика', description: 'Несмотря на стереотипы, сочетание бежевого и серого может быть удачным' },
  { id: 9, img: img6, caption: 'Детская для двоих или троих: несколько прекрасных идей', rubric: '#Подборки', description: 'Если в семье больше одного ребенка, а детская всего одна, то это может стать настоящей головной болью' },
];

const Main = () => {
  return (
    <>
      <MainPageTitle />
      <LastArticle />
      <ArticlesList articlesListData={ articlesListData } />
      <ButtonMore />
      <Subscribe />
      <PopularList popularListData={ popularListData } />
    </>
  );
};

export default Main;