import React from "react";

import './articles-list.scss';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import img1 from './img/smart-kvartira-v-brazilii-pufikhomes-1-1.jpg';
import img2 from './img/interesting-colors-in-new-york-apartment-pufikhomes-1-1.jpg';
import img3 from './img/elegantnaya-skandinavskaya-kvartira-v-priglushennyh-tonah-pufikhomes-1.jpg';
import img4 from './img/malenkaya-kvartira-v-temno-seryh-tonah-v-shvecii-40kvm-pufikhomes-2-1.jpg';

const ArticlesList = () => {
  return (
    <Container>
      <Row className="article-list">
        <Col lg={7}>
          <div className="article-list__item">
              <Link to="/" className="article-list__picture">
                <img src={img1} alt="Image"/></Link>
              <Link to="/" className="article-list__caption">
                <span>Светлая квартира с персиковыми стенами на окраине Стокгольма</span></Link>
              <Link to="/" className="article-list__link hashtag">
                #Маленькие квартиры</Link>
          </div>
        </Col>
        <Col lg={5}>
          <div className="article-list__item">
            <Link to="/" className="article-list__picture">
              <img src={img2} alt="Image"/></Link>
            <Link to="/" className="article-list__caption">
                <span className="text-underline">
                  Интересные цветовые сочетания в интерьере квартиры в Нью-Йорке</span></Link>
            <Link to="/" className="article-list__link hashtag">
              #Маленькие квартиры</Link>
          </div>
        </Col>
        <Col lg={6}>
          <div className="article-list__item pr-5">
            <Link to="/" className="article-list__picture">
              <img src={img3} alt="Image"/></Link>
            <Link to="/" className="article-list__caption">
                <span className="text-underline">
                  Элегантная скандинавская квартира в приглушенных тонах</span></Link>
            <Link to="/" className="article-list__link hashtag">
              #Маленькие квартиры</Link>
          </div>
        </Col>
        <Col lg={6}>
          <div className="article-list__item pl-5">
            <Link to="/" className="article-list__picture">
              <img src={img4} alt="Image"/></Link>
            <Link to="/" className="article-list__caption">
                <span className="text-underline">
                  Маленькая серая квартира с видом на залив в Стокгольме</span></Link>
            <Link to="/" className="article-list__link hashtag">
              #Маленькие квартиры</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesList;