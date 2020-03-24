import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import Articles from "../pages/articles";
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../../scss/main.scss';

export default class App extends Component {
  blogService = new BlogService();

  state = {
    lastArticle: { picture: 'undefined.png' },
    popularListData: [],
    popularListPosition: 0,
    popularListItemWidth: 332,
    slipBlocker: true,
    modalMsg: '',
    modalVisible: false,
    hasError: false
  };

  onError = (error, info) => {
    this.setState({
      hasError: true,
    });
  };

  onLastArticleLoaded = (article) => {
    this.setState({
      lastArticle: article
    });
  };

  updateLastArticle() {
    this.blogService
      .getArticle()
      .then(this.onLastArticleLoaded)
      .catch(this.onError);
  }

  onPopularArticlesLoaded = (articles) => {
    this.setState({
      popularListData: articles.results
    });
  };

  updatePopularArticles() {
    this.blogService
      .getArticles(9)
      .then(this.onPopularArticlesLoaded)
      .catch(this.onError);
  }

  onNextPage = (articles) => {
    const newArticlesListData = [
      ...this.state.articlesListData,
      ...articles.results ];

    this.setState({
      nextPage: articles.next,
      previousPage: articles.previous,
      articlesListData: newArticlesListData,
    });
  };

  getNexPage = () => {
    this.setState({
    });

    this.blogService
      .getArticles(false, this.state.nextPage)
      .then(this.onNextPage)
      .catch(this.onError);
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
        popularListData={ this.state.popularListData }
        popularListPosition={ this.state.popularListPosition }
        getNexPage={ this.getNexPage }
        nextPage={ this.state.nextPage }
        toggleSlide={ this.toggleSlide }
        handleModalShow={ this.handleModalShow } />
    );
  };

  componentDidMount() {
    this.updateLastArticle();
    this.updatePopularArticles();
  };

  render() {
    const { modalVisible, modalMsg } = this.state;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={ this.MainPage } exact />
            <Route path="/articles/" component= { Articles } exact />
            <Route path="/articles/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <Articles articleId={ id } />;
              }} />
            <Route path="/about" component={ About } />
            <Route path="/publish-project" component={ PublishProject } />
            <Route path="/contacts" component={ Contacts } />
            <Route path="/for-advertisers" component={ ForAdvertisers } />
            <Route path="/policy-personal-data" component={ PolicyPersonalData } />
            <Route path="/privacy-policy" component={ PrivacyPolicy } />
            <Route path="/cookie-policy" component= { CookiePolicy } />
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
        <Spinner />
        <ModalMessage
          modalVisible={ modalVisible }
          modalMsg={ modalMsg }
          handleModalHide={ this.handleModalHide } />
      </>
    );
  }
}