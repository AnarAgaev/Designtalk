import React from "react";

import './popular.scss';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

import img1 from './img/smart-kvartira-v-brazilii-pufikhomes-1-1.jpg';
import img2 from './img/elegantnaya-krasivaya-sovremennaya-kvartira-v-stokgolme-pufikhomes-4a.jpg';
import img3 from './img/korichnevye-steny-v-skandinavskoi-kvartire-pufikhomes-1-1.jpg';
import img4 from './img/kids-room-for-two-three-pufikhomes-2a.jpg';
import img5 from './img/minimalistichnaya-kvartira-v-moskve-pufikhomes-2.jpg';

const Popular = () => {
  return (
    <div className="popular">
      <Container>
        <h3 className="popular__title">это читают больше всего</h3>
        <div className="popular__list">
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img1})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Smart квартира в Бразилии</span></Link>
            </div>
            <p className="popular__item__description">
              Эта роскошная современная квартира в Стокгольме наполнена
              уникальной дизайнерской мебелью и оригинальными предметами
              декора <a href="#">#Маленькие квартиры</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img2})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Изысканный дизайн современных апартаментов</span></Link>
            </div>
            <p className="popular__item__description">
              Эта роскошная современная квартира в Стокгольме
              наполнена уникальной дизайнерской
              мебелью <a href="#">#Современный Арт-Деко</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img3})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Современная квартира с музыкальной комнатой в Стокгольме</span></Link>
            </div>
            <p className="popular__item__description">
              Несмотря на стереотипы, сочетание бежевого и серого может быть
              удачным <a href="#">#Скандика</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img4})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Детская для двоих или троих: несколько прекрасных идей</span></Link>
            </div>
            <p className="popular__item__description">
              Если в семье больше одного ребенка, а детская всего одна, то это
              может стать настоящей головной болью <a href="#">#Подборки</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img5})`}} />
              <Link className="popular__item__caption" to="/">
                <span>10 причин полюбить белый интерьер</span></Link>
            </div>
            <p className="popular__item__description">
              Мы так часто и так много пишем о разных белых интерьерах, что
              наконец-то решили сделать подборочку <a href="#">#Концепции</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img1})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Smart квартира в Бразилии</span></Link>
            </div>
            <p className="popular__item__description">
              Эта роскошная современная квартира в Стокгольме наполнена
              уникальной дизайнерской мебелью и оригинальными предметами
              декора <a href="#">#Маленькие квартиры</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img2})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Изысканный дизайн современных апартаментов</span></Link>
            </div>
            <p className="popular__item__description">
              Эта роскошная современная квартира в Стокгольме
              наполнена уникальной дизайнерской
              мебелью <a href="#">#Современный Арт-Деко</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img3})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Современная квартира с музыкальной комнатой в Стокгольме</span></Link>
            </div>
            <p className="popular__item__description">
              Несмотря на стереотипы, сочетание бежевого и серого может быть
              удачным <a href="#">#Скандика</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img4})`}} />
              <Link className="popular__item__caption" to="/">
                <span>Детская для двоих или троих: несколько прекрасных идей</span></Link>
            </div>
            <p className="popular__item__description">
              Если в семье больше одного ребенка, а детская всего одна, то это
              может стать настоящей головной болью <a href="#">#Подборки</a>
            </p>
          </article>
          <article className="popular__item">
            <div>
              <Link to="/"
                className="popular__item__picture"
                style={{backgroundImage: `url(${img5})`}} />
              <Link className="popular__item__caption" to="/">
                <span>10 причин полюбить белый интерьер</span></Link>
            </div>
            <p className="popular__item__description">
              Мы так часто и так много пишем о разных белых интерьерах, что
              наконец-то решили сделать подборочку <a href="#">#Концепции</a>
            </p>
          </article>
        </div>
        <div className="popular__controls">
          <div className="btn__controls btn__left" id="popularMoveLeft" />
          <div className="btn__controls btn__right" id="popularMoveRight" />
        </div>
      </Container>
    </div>
  );
};

export default Popular;