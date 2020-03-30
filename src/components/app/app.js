import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import Articles from "../pages/articles";
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../../scss/main.scss';

export default class App extends Component {

  state = {
    modalMsg: '',
    modalVisible: false
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
        handleModalShow={ this.handleModalShow } />
    );
  };

  render() {
    const { modalVisible, modalMsg } = this.state;

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