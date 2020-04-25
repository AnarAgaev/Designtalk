import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FromContainer from "../../form"
import { jumpToTop } from "../../../utils";
import AbsoluteWrapper from "../../absolute-wrapper";
import { connect } from "react-redux";
import { resetRedirectToNotFound, resetRedirectToNotFoundAtRubric } from "../../../actions";
import "./page-not-found.scss";
import {Link} from "react-router-dom";
import image from "../../../images/giphy.webp";

class PageNotFound extends Component {

  /*
   * At the componentDidMount we well reset Not Found
   * parameters of all dir with not found pages.
  */
  componentDidMount() {
    const {
      resetRedirectToNotFound,
      articleNotFound,
      resetRedirectToNotFoundAtRubric,
      lastRubricArticle
    } = this.props;

    if (articleNotFound) {
      resetRedirectToNotFound();
    }

    if (lastRubricArticle) {
      resetRedirectToNotFoundAtRubric();
    }

    jumpToTop();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <Container className="pnf">
          <Row>
            <Col lg={9}>
              <div className="pnf__pic">
                <img src={ image }
                     alt="Страница не найдена"
                     title="Страница не найдена" />
              </div>

              <h1>Страница не найдена</h1>

              <h3>
                К сожалению, данной страницы на сайте больше нет.
                Возможно, она переименована, перенесена в другой раздел или удалена.
              </h3>

              <p className="mt-5">
                Чтобы устранить причину ошибки, выполните следующие действия:
                <br/>1. Проверь, правильно ли набран URL-адрес страницы в адресной строке браузера.
                <br/>2. Если Вы считаете, что это наша ошибка, сообщи нам, пожалуйста,
                воспользовавшись формой ниже. Не забудь указать неработающую ссылку или страницу.
              </p>

              <Link to="/" className="button pnf__btn mt-5">перейти на главную</Link>

            </Col>
          </Row>

          <Row>
            <Col lg={7}>
              <h3 className="mt-5">Нашли ошибку на сайте? Сообщите нам.</h3>
              <FromContainer
                name={{required: false}}
                email={{required: true}}
                message={{required: true}}

                url={'/scripts/handle-form-contacts.php'}
                successMessage={'Зпрос отправлен. Спасибо, что помогаете сделать сайт лучше.'}
              />
            </Col>
          </Row>
        </Container>
      </AbsoluteWrapper>
    );
  }
}

const mapStateToProps = ({ article, lastRubricArticle }) => {
  return {
    articleNotFound: article.notFound,
    lastRubricArticle: lastRubricArticle.notFound
  };
};

const mapDispatchToProps = {
  resetRedirectToNotFound,
  resetRedirectToNotFoundAtRubric
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNotFound);