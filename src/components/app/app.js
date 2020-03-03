import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import '../../scss/main.scss';
import ModalMessage from "../modal-message";

export default class App extends Component {
  state = {
    cursorVisible: false,
    cursorOffsetX: 0,
    cursorOffsetY: 0,
  };

  handleCursorOverImg = (visible, offsetX = 0, offsetY = 0) => {
    this.setState({
      cursorVisible: visible,
      cursorOffsetX: offsetX,
      cursorOffsetY: offsetY
    })
  };

  MainPage = () => {
    return (
      <Main
        handleCursorOverImg={ this.handleCursorOverImg } />
    );
  };

  render() {
    const { cursorVisible,
            cursorOffsetX,
            cursorOffsetY } = this.state;

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
        <Cursor
          cursorVisible = { cursorVisible }
          cursorOffsetX = { cursorOffsetX }
          cursorOffsetY = { cursorOffsetY } />
      </Router>
    );
  }
}