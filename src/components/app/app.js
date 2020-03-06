import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogService from "../../services/blog-service";

import Header from "../header";
import Main from "../pages/main";
import Cursor from "../cursor";
import Footer from "../footer";
import About from "../pages/about";
import PublishProject from "../pages/publish-project";
import Contacts from "../pages/contacts";
import ForAdvertisers from "../pages/for-advertisers";
import CookiePolicy from "../pages/cookie-policy";
import PrivacyPolicy from "../pages/privacy-policy";
import PolicyPersonalData from "../pages/policy-personal-data";
import ModalMessage from "../modal-message";

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../../scss/main.scss';
import img1 from "../pages/main/img/smart-kvartira-v-brazilii-pufikhomes-1-1.jpg";
import img5 from "../pages/main/img/elegantnaya-krasivaya-sovremennaya-kvartira-v-stokgolme-pufikhomes-4a.jpg";
import img7 from "../pages/main/img/korichnevye-steny-v-skandinavskoi-kvartire-pufikhomes-1-1.jpg";
import img6 from "../pages/main/img/kids-room-for-two-three-pufikhomes-2a.jpg";
import img8 from "../pages/main/img/minimalistichnaya-kvartira-v-moskve-pufikhomes-2.jpg";
import img2 from "../pages/main/img/interesting-colors-in-new-york-apartment-pufikhomes-1-1.jpg";
import img3 from "../pages/main/img/elegantnaya-skandinavskaya-kvartira-v-priglushennyh-tonah-pufikhomes-1.jpg";
import img4 from "../pages/main/img/malenkaya-kvartira-v-temno-seryh-tonah-v-shvecii-40kvm-pufikhomes-2-1.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.updateLastArticle();
  }

  blogService = new BlogService();

  updateLastArticle() {
    this.blogService.getArticle()
      .then((article) => {
        this.setState({
          lastArticle: {
            id: article.id,
            url: article.url,
            rubric: {
              id: article.rubric.id,
              url: article.rubric.url,
              name: article.rubric.name
            },
            title: article.title,
            preview: article.preview,
            picture: article.picture
          }
        });
      });
  }

  state = {
    cursorVisible: false,
    cursorOffsetX: 0,
    cursorOffsetY: 0,
    lastArticle: {
      id: null,
      url: null,
      rubric: {
        id: null,
        url: null,
        name: null
      },
      title: null,
      preview: null,
      picture: 'img-plug.png'
    },
    articlesListData: [
      { id: 1, img: img1, rubric: 'Маленькие квартиры', caption: 'Светлая квартира с персиковыми стенами на окраине Стокгольма'},
      { id: 2, img: img2, rubric: 'Маленькие квартиры', caption: 'Интересные цветовые сочетания в интерьере квартиры в Нью-Йорке'},
      { id: 3, img: img3, rubric: 'Маленькие квартиры', caption: 'Элегантная скандинавская квартира в приглушенных тонах'},
      { id: 4, img: img4, rubric: 'Маленькие квартиры', caption: 'Маленькая серая квартира с видом на залив в Стокгольме'},
    ],
    popularListData: [
      { id: 1, img: img1, caption: 'Smart квартира в Бразилии', rubric: 'Маленькие квартиры', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью и оригинальными предметами декора' },
      { id: 2, img: img5, caption: 'Изысканный дизайн современных апартаментов', rubric: 'Современный Арт-Деко', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью' },
      { id: 3, img: img7, caption: 'Современная квартира с музыкальной комнатой в Стокгольме', rubric: 'Скандика', description: 'Несмотря на стереотипы, сочетание бежевого и серого может быть удачным' },
      { id: 4, img: img6, caption: 'Детская для двоих или троих: несколько прекрасных идей', rubric: 'Подборки', description: 'Если в семье больше одного ребенка, а детская всего одна, то это может стать настоящей головной болью' },
      { id: 5, img: img8, caption: '10 причин полюбить белый интерьер', rubric: 'Концепции', description: 'Мы так часто и так много пишем о разных белых интерьерах, что наконец-то решили сделать подборочку' },
      { id: 6, img: img1, caption: 'Smart квартира в Бразилии', rubric: '#Маленькие квартиры', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью и оригинальными предметами декора' },
      { id: 7, img: img5, caption: 'Изысканный дизайн современных апартаментов', rubric: 'Современный Арт-Деко', description: 'Эта роскошная современная квартира в Стокгольме наполнена уникальной дизайнерской мебелью' },
      { id: 8, img: img7, caption: 'Современная квартира с музыкальной комнатой в Стокгольме', rubric: 'Скандика', description: 'Несмотря на стереотипы, сочетание бежевого и серого может быть удачным' },
      { id: 9, img: img6, caption: 'Детская для двоих или троих: несколько прекрасных идей', rubric: 'Подборки', description: 'Если в семье больше одного ребенка, а детская всего одна, то это может стать настоящей головной болью' },
    ],
    popularListPosition: 0,
    popularListItemWidth: 312,
    slipBlocker: true,
    modalMsg: '',
    modalVisible: false
  };

  handleCursorOverImg = (visible, offsetX = 0, offsetY = 0) => {
    this.setState({
      cursorVisible: visible,
      cursorOffsetX: offsetX,
      cursorOffsetY: offsetY
    })
  };

  toggleSlide = (direction, right) => {
    const { popularListPosition,
            popularListItemWidth,
            slipBlocker } = this.state;

    const offset = popularListPosition +
      popularListItemWidth * direction;

    if (slipBlocker) {
      if ( direction === -1 && right > window.innerWidth ||
           direction === 1 && popularListPosition ) {
        this.setState({
          popularListPosition: offset,
          slipBlocker: false
        });
      }

      setTimeout(()=> {
        this.setState({ slipBlocker: true })
      }, 300);
    }
  };

  handleModalShow = (msg) => {
    this.setState({
      modalVisible: true,
      modalMsg: msg
    });
  };

  handleModalHide = () => {
    this.setState({
      modalMsg: '',
      modalVisible: false
    })
  };

  MainPage = () => {
    return (
      <Main
        popularListData={ this.state.popularListData }
        articlesListData={ this.state.articlesListData }
        popularListPosition={ this.state.popularListPosition }
        lastArticle={ this.state.lastArticle }
        handleCursorOverImg={ this.handleCursorOverImg }
        toggleSlide={ this.toggleSlide }
        handleModalShow={ this.handleModalShow } />
    );
  };

  render() {
    const { cursorVisible, cursorOffsetX,
            cursorOffsetY, modalVisible,
            modalMsg } = this.state;

    return (
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={ this.MainPage } exact={true} />
            <Route path="/about" component={ About } />
            <Route path="/publish-project" component={ PublishProject } />
            <Route path="/contacts" component={ Contacts } />
            <Route path="/for-advertisers" component={ ForAdvertisers } />
            <Route path="/policy-personal-data" component={ PolicyPersonalData } />
            <Route path="/privacy-policy" component={ PrivacyPolicy } />
            <Route path="/cookie-policy" component= {CookiePolicy } />
          </Switch>
        </main>
        <Footer />
        <ModalMessage
          modalVisible={ modalVisible }
          modalMsg={ modalMsg }
          handleModalHide={ this.handleModalHide } />
        <Cursor
          cursorVisible = { cursorVisible }
          cursorOffsetX = { cursorOffsetX }
          cursorOffsetY = { cursorOffsetY } />
      </Router>
    );
  }
}


// service.getAllArticles()
//   .then((response) => {
//     console.log(response);
//   });
