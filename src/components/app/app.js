import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogService from "../../services/blog-service";
import Header from "../header";
import Main from "../pages/main";
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

  onLastArticleLoaded = (article) => {
    this.setState({
      lastArticle: article
    });
  };

  updateLastArticle() {
    this.blogService
      .getArticle()
      .then(this.onLastArticleLoaded);
  }

  onArticlesLoaded = (articles) => {
    this.setState({
      articlesListData: articles.results
    });
  };

  updateArticles() {
    this.blogService
      .getArticles()
      .then(this.onArticlesLoaded);
  }

  onPopularArticlesLoaded = (articles) => {
    this.setState({
      popularListData: articles.results
    });
  };

  updatePopularArticles() {
    this.blogService
      .getArticles(9)
      .then(this.onPopularArticlesLoaded);
  }

  state = {
    lastArticle: [],
    articlesListData: [],
    popularListData: [],
    popularListPosition: 0,
    popularListItemWidth: 332,
    slipBlocker: true,
    modalMsg: '',
    modalVisible: false,
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
        lastArticle={ this.state.lastArticle }
        articlesListData={ this.state.articlesListData }
        popularListData={ this.state.popularListData }
        popularListPosition={ this.state.popularListPosition }
        toggleSlide={ this.toggleSlide }
        handleModalShow={ this.handleModalShow } />
    );
  };

  render() {
    const { modalVisible, modalMsg } = this.state;

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
      </Router>
    );
  }
}