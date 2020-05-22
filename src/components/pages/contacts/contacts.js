import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FromContainer from "../../form"
import { jumpToTop } from "../../../utils";
import PersonCardItem from "../../person-card-item";
import AbsoluteWrapper from "../../absolute-wrapper";
import { Helmet } from "react-helmet";
import './contacts.scss';

class Contacts extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <Helmet>
          <title>Контакты | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
          <meta name="description" content="Мы всегда внимательны к сообщениям со страницы Контакты. На этой странице вы можете задать вопросы по любым темам." />
          <meta name="keywords" content="контакты, написать в службу поддержки, письмо в службу поддержки, служба поддержки" />
          <link rel="canonical" href="https://designtalk.ru/contacts" />

          <meta name="og:title" content="Контакты | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta property="og:title" content="Контакты | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta name="og:description" content="Мы всегда внимательны к сообщениям со страницы Контакты. На этой странице вы можете задать вопросы по любым темам." />
          <meta property="og:description" content="Мы всегда внимательны к сообщениям со страницы Контакты. На этой странице вы можете задать вопросы по любым темам." />
          <meta name="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:type" content="article" />
          <meta name="og:url" content="https://designtalk.ru/contacts" />
          <meta property="og:url" content="https://designtalk.ru/contacts" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Container>
          <Row>
            <Col lg={9}>
              <h1>Контакты</h1>
              <h3>
                Мы всегда внимательны к сообщениям со страницы контакты.
                Вы можете использовать данную форму для отправки вопросов
                по любым темам.
              </h3>
            </Col>
          </Row>

          <Row>
            <Col lg={7}>
              <FromContainer
                name={{required: false}}
                phone={{required: false}}
                email={{required: true}}
                message={{required: true}}

                url={'/scripts/handle-form-contacts.php'}
                successMessage={'Зпрос отправлен. Менеджер свяжется с Вами в ближайшее время.'}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={10}>
              <h3 className="mt-4">
                или напишите письмо издателю
              </h3>

              <PersonCardItem
                position={'издатель'}
                name={'Наталья Кабанова'}
                email={'n.kabanova'} />
            </Col>
          </Row>
        </Container>
      </AbsoluteWrapper>
    );
  }
}

export default Contacts;