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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.updateLastArticle();
    this.updateArticles();
    this.updatePopularArticles();
  }

  blogService = new BlogService();

  updateLastArticle() {
    this.blogService.getArticle()
      .then((article) => {
        this.setState({
          lastArticle: article
        });
      });
  }

  updateArticles() {
    this.blogService.getAllArticles()
      .then((articles) => {
        this.setState({
          articlesListData: articles.results
        })
      });
  }

  updatePopularArticles() {
    this.blogService.getAllArticles(9)
      .then((articles) => {
        this.setState({
          popularListData: articles.results
        })
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
    articlesListData: [],
    popularListData: [],
    popularListPosition: 0,
    popularListItemWidth: 332,
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