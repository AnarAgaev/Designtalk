import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { jumpToTop } from "../../../utils";
import AboutPageTitle from "../../about-page-title";
import AbsoluteWrapper from "../../absolute-wrapper";
import { Helmet } from "react-helmet";
import './about.scss';

export default class About extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <Helmet>
          <title>О нас | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
          <meta name="description" content="Designtalk - это блог о дизайне пространств и всего что в этом пространстве находится. Наша миссия Вдохновлять и популяризировать качественный и современный дизайн интерьера." />
          <meta name="keywords" content="designtalk, о блоге, о нас, о проекте, что такое designtalk, designtalk что это" />
          <link rel="canonical" href="https://designtalk.ru/about" />

          <meta name="og:title" content="О нас | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta property="og:title" content="О нас | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta name="og:description" content="Designtalk - это блог о дизайне пространств и всего что в этом пространстве находится. Наша миссия Вдохновлять и популяризировать качественный и современный дизайн интерьера." />
          <meta property="og:description" content="Designtalk - это блог о дизайне пространств и всего что в этом пространстве находится. Наша миссия Вдохновлять и популяризировать качественный и современный дизайн интерьера." />
          <meta name="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:type" content="article" />
          <meta name="og:url" content="https://designtalk.ru/about" />
          <meta property="og:url" content="https://designtalk.ru/about" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <AboutPageTitle />
        <Container className={"about"}>
          <Row>
            <Col lg={{span: 9, offset: 0}}>
              <p>
                <b>Designtalk</b> - это блог и онлайн-издание а также группы в популярных социальных сетях, публикующие материалы о
                дизайне пространств и всего что в этом пространстве находится. Мы стараемся в максимально доступной
                и удобной форме информировать своего читателя о самых последних новостях дизайна интерьеров,
                искусства, архитектуры, а также дизайна мебели и предметов декора.
                Чтобы быть в курсе самых последних новостей нашему читателю не нужно изучать и исследовать множество 
                онлайн сми и печатных изданий, редакция designtalk.ru отфильтрует и выберет все самые актуальные, 
                важные и интересные события и тенденции из всего многообразия информационного потока. Мы молодое 
                издание, основанное в 2020 году группой энтузиастов, влюбленных в качественный дизайн. В своем 
                издании помимо освещения последних трендов из мира дизайна пространств, мы также формируем контент 
                дающий практические рекомендации в области дизайна интерьеров и предметов декора. Редакция 
                designtalk.ru рассчитывает, что материалы, публикуемые на страницах сайт и в социальных сетях будут 
                интересны и познавательны не только профессиональным архитекторам и дизайнерам, но и широкому кругу 
                читателей. Благодаря наличию веб версии, мобильного сайта и постоянным публикациям во всех популярных 
                социальных сетях и площадках для постинга статей, наш читатель может получать все издаваемые материалы 
                в максимально удобной форме.
              </p>
              <p>
                Все материалы интернет-ресурса designtalk.ru принадлежат или контролируются Обществом с Ограниченной 
                Ответственностью "Цифровое медиа "Дизайнталк". Вся информация и материалы designtalk.ru защищены 
                российским и международным законодательством об авторском праве и смежных правах.
              </p>
              <p>
                Использование любых материалов designtalk.ru разрешается только с письменного согласия 
                ООО "Цифровое медиа "Дизайнталк" и при наличии гиперссылки на www.designtalk.ru.
              </p>
            </Col>
          </Row>
        </Container>
      </AbsoluteWrapper>
    );
  }
}