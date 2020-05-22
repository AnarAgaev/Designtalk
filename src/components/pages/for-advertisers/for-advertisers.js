import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FromContainer from "../../form"
import { jumpToTop } from "../../../utils";
import PersonCardList from "../../person-card-list";
import AbsoluteWrapper from "../../absolute-wrapper";
import personList from "./person-list-data";
import { Helmet } from "react-helmet";
import './for-advertisers.scss';

class ForAdvertisers extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <Helmet>
          <title>Рекламодателям | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
          <meta name="description" content="Реклама на страницах сайта Designtalk.ru и в постах в социальных сетях. Возможно использование любых рекламных форматов от спецпроектов до статических рекламных баннеров и рекламных статей." />
          <meta name="keywords" content="реклама, реклама в блоге, реклама дизайн интерьера, реклама в социальных сетях, реклама designtalk" />
          <link rel="canonical" href="https://designtalk.ru/for-advertisers" />

          <meta name="og:title" content="Рекламодателям | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta property="og:title" content="Рекламодателям | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta name="og:description" content="Реклама на страницах сайта Designtalk.ru и в постах в социальных сетях. Возможно использование любых рекламных форматов от спецпроектов до статических рекламных баннеров и рекламных статей." />
          <meta property="og:description" content="Реклама на страницах сайта Designtalk.ru и в постах в социальных сетях. Возможно использование любых рекламных форматов от спецпроектов до статических рекламных баннеров и рекламных статей." />
          <meta name="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:type" content="article" />
          <meta name="og:url" content="https://designtalk.ru/for-advertisers" />
          <meta property="og:url" content="https://designtalk.ru/for-advertisers" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Container>
          <Row>
            <Col lg={10}>
              <h1>Рекламодателям</h1>
              <h3>
                designtalk — цифровое издание
                о дизайне пространства
              </h3>

              <p>
                Издание публикует информационные материалы на страницах сайта и в группах в социальных сетях.
                Тематика публикуемых материалов - дизайн интерьера, архитектура и искусство, дизайн мебели и
                предметов декора. Нам очень интересны компании, продукция которых близка по духу или схожа по
                тематике с публикуемыми материалами. Мы предлагаем рекламное размещение как на страницах сайта
                так и в постах в социальных сетях. Возможно использование любых рекламных форматов от
                спецпроектов до статических рекламных баннеров и рекламных статей.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="mb-5">
              <h3 className="mt-5">
                по вопросам стоимости и форматов
                размещения рекламы пишите на
                почтовые адреса
              </h3>

              <PersonCardList
                cardList={ personList } />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <h3>или воспользуйтесь формой ниже</h3>
            </Col>

            <Col lg={7}>
              <FromContainer
                name={{required: false}}
                phone={{required: true}}
                email={{required: true}}
                message={{required: true}}

                url={'/scripts/handle-form-for-advertisers.php'}
                successMessage={'Зпрос отправлен. Мы ответим Вам в ближайшее время.'}
              />
            </Col>
          </Row>
        </Container>
      </AbsoluteWrapper>
    );
  };
}

export default ForAdvertisers;